import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { ROUTES } from "../constants/routes";
import { authService } from "../services/authService";
import { getErrorMessage } from "../utils/errorHandler";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values) => {
    try {
      const response = await authService.login(values);
      toast.success(response.message || "Login OTP sent to your email");
      navigate(ROUTES.verifyLoginOtp, { state: { email: values.email } });
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <section className="mx-auto flex max-w-md flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-950">Login</h1>
        <p className="mt-2 text-sm text-slate-500">Enter your credentials to receive a login OTP.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
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
            placeholder="Enter password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />
          <Button type="submit" loading={isSubmitting} className="w-full">
            Login
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          New here?{" "}
          <Link to={ROUTES.register} className="font-semibold text-brand-600 hover:text-brand-700">
            Create account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
