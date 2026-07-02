import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { ROUTES } from "../constants/routes";
import { authService } from "../services/authService";
import { getErrorMessage } from "../utils/errorHandler";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const password = watch("password");

  const onSubmit = async (values) => {
    try {
      const response = await authService.register({
        name: values.name,
        email: values.email,
        password: values.password
      });

      toast.success(response.message || "Registration OTP sent to your email");
      navigate(ROUTES.verifyRegisterOtp, { state: { email: values.email } });
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <section className="mx-auto flex max-w-md flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-950">Register</h1>
        <p className="mt-2 text-sm text-slate-500">Create your account and verify it with an email OTP.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <Input
            id="name"
            label="Name"
            placeholder="Your name"
            error={errors.name?.message}
            {...register("name", { required: "Name is required" })}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email"
              }
            })}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Create password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />
          <Input
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Repeat password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match"
            })}
          />
          <Button type="submit" loading={isSubmitting} className="w-full">
            Register
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to={ROUTES.login} className="font-semibold text-brand-600 hover:text-brand-700">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
