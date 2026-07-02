import { useEffect } from "react";
import { RefreshCcw, Server, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

import StatusBadge from "../components/common/StatusBadge";
import Button from "../components/ui/Button";
import ErrorMessage from "../components/ui/ErrorMessage";
import Loader from "../components/ui/Loader";
import { useAuth } from "../context/AuthContext";
import { useApi } from "../hooks/useApi";
import { authService } from "../services/authService";
import { backendService } from "../services/backendService";

const Dashboard = () => {
  const { user, updateUser, logout } = useAuth();
  const profileApi = useApi(authService.getProfile);
  const testApi = useApi(backendService.getTestConnection);

  useEffect(() => {
    profileApi
      .execute()
      .then((response) => updateUser(response.user))
      .catch(() => {
        logout();
        toast.error("Session expired. Please login again.");
      });
    testApi.execute().catch(() => {});
  }, []);

  const refreshConnection = async () => {
    try {
      const [profileResponse] = await Promise.all([profileApi.execute(), testApi.execute()]);
      updateUser(profileResponse.user);
      toast.success("Dashboard data refreshed");
    } catch {
      toast.error("Could not refresh data");
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <StatusBadge tone="success">Protected route</StatusBadge>
          <h1 className="mt-4 text-3xl font-bold text-slate-950">Dashboard</h1>
          <p className="mt-2 text-slate-600">Welcome, {user?.name || user?.email || "Demo User"}.</p>
        </div>
        <Button onClick={refreshConnection} loading={testApi.loading || profileApi.loading}>
          <RefreshCcw size={17} aria-hidden="true" />
          Refresh
        </Button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
          <ShieldCheck className="text-emerald-600" size={26} aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-slate-950">Route Guard</h2>
          <p className="mt-2 text-sm text-slate-500">Dashboard is protected using a reusable route wrapper.</p>
        </div>
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
          <Server className="text-brand-600" size={26} aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-slate-950">API Layer</h2>
          <p className="mt-2 text-sm text-slate-500">Axios requests are managed through the service folder.</p>
        </div>
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
          <RefreshCcw className="text-indigo-600" size={26} aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-slate-950">Demo Status</h2>
          <p className="mt-2 text-sm text-slate-500">Backend response appears below when the server is running.</p>
        </div>
      </div>

      <div className="mt-8 rounded-md border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold text-slate-950">Current User Profile</h2>
        <div className="mt-4">
          {profileApi.loading && <Loader text="Loading profile..." />}
          <ErrorMessage message={profileApi.error} />
          {profileApi.data?.user && (
            <pre className="overflow-auto rounded-md bg-slate-950 p-4 text-sm text-slate-100">
              {JSON.stringify(profileApi.data.user, null, 2)}
            </pre>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-md border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold text-slate-950">Backend Test API</h2>
        <div className="mt-4">
          {testApi.loading && <Loader text="Loading backend status..." />}
          <ErrorMessage message={testApi.error} />
          {testApi.data && (
            <pre className="overflow-auto rounded-md bg-slate-950 p-4 text-sm text-slate-100">
              {JSON.stringify(testApi.data, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
