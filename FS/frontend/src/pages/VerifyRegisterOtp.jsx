import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../context/AuthContext";
import { authService } from "../services/authService";
import { getErrorMessage } from "../utils/errorHandler";

const VerifyRegisterOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      email: location.state?.email || "",
      otp: ""
    }
  });

  const onSubmit = async (values) => {
    try {
      const response = await authService.verifyRegisterOtp(values);
      login({ token: response.token, user: response.user });
      toast.success(response.message || "Email verified successfully");
      navigate(ROUTES.dashboard);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <section className="mx-auto flex max-w-md flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-950">Verify Registration OTP</h1>
        <p className="mt-2 text-sm text-slate-500">Enter the 6-digit OTP sent to your email.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email", { required: "Email is required" })}
          />
          <Input
            id="otp"
            label="OTP"
            placeholder="123456"
            maxLength={6}
            error={errors.otp?.message}
            {...register("otp", {
              required: "OTP is required",
              minLength: { value: 6, message: "OTP must be 6 digits" }
            })}
          />
          <Button type="submit" loading={isSubmitting} className="w-full">
            Verify OTP
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Need to start again?{" "}
          <Link to={ROUTES.register} className="font-semibold text-brand-600 hover:text-brand-700">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default VerifyRegisterOtp;
