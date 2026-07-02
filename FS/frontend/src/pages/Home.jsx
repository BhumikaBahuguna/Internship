import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Database, Image, Server } from "lucide-react";
import toast from "react-hot-toast";

import StatusBadge from "../components/common/StatusBadge";
import ErrorMessage from "../components/ui/ErrorMessage";
import Loader from "../components/ui/Loader";
import Button from "../components/ui/Button";
import { ROUTES } from "../constants/routes";
import { backendService } from "../services/backendService";
import { useApi } from "../hooks/useApi";
import { formatDateTime } from "../utils/formatDate";

const Home = () => {
  const healthApi = useApi(backendService.getHealth);
  const testApi = useApi(backendService.getTestConnection);

  useEffect(() => {
    healthApi.execute().catch(() => {});
    testApi.execute().catch(() => {});
  }, []);

  const handleRetest = async () => {
    try {
      await Promise.all([healthApi.execute(), testApi.execute()]);
      toast.success("Backend connection checked");
    } catch {
      toast.error("Unable to reach backend");
    }
  };

  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col justify-center"
        >
          <StatusBadge tone="success">Frontend ready</StatusBadge>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            React frontend connected to your Express backend.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            This app verifies the demo flow between React, Express, MongoDB, and Cloudinary using a clean production-style folder structure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={handleRetest} loading={healthApi.loading || testApi.loading}>
              Test API Connection
            </Button>
            <Link to={ROUTES.dashboard}>
              <Button variant="outline">Open Dashboard</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="rounded-md border border-slate-200 bg-white p-5 shadow-soft"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Connection Status</h2>
              <p className="text-sm text-slate-500">Live response from backend APIs</p>
            </div>
            <Server className="text-brand-600" size={24} aria-hidden="true" />
          </div>

          <div className="mt-5 space-y-4">
            {(healthApi.loading || testApi.loading) && <Loader text="Checking backend..." />}
            <ErrorMessage message={healthApi.error || testApi.error} />

            <div className="grid gap-3">
              <div className="flex items-center justify-between rounded-md border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <Server size={20} className="text-brand-600" aria-hidden="true" />
                  <span className="font-medium text-slate-800">Backend</span>
                </div>
                <StatusBadge tone={testApi.data?.success ? "success" : "neutral"}>
                  {testApi.data?.success ? "Connected" : "Pending"}
                </StatusBadge>
              </div>

              <div className="flex items-center justify-between rounded-md border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <Database size={20} className="text-emerald-600" aria-hidden="true" />
                  <span className="font-medium text-slate-800">MongoDB</span>
                </div>
                <StatusBadge tone={healthApi.data?.mongodb === "connected" ? "success" : "warning"}>
                  {healthApi.data?.mongodb || "Unknown"}
                </StatusBadge>
              </div>

              <div className="flex items-center justify-between rounded-md border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <Image size={20} className="text-indigo-600" aria-hidden="true" />
                  <span className="font-medium text-slate-800">Cloudinary</span>
                </div>
                <StatusBadge tone={testApi.data?.cloudinaryConfigured ? "success" : "neutral"}>
                  {testApi.data?.cloudinaryConfigured ? "Configured" : "Pending"}
                </StatusBadge>
              </div>
            </div>

            {healthApi.data?.timestamp && (
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 size={16} className="text-emerald-600" aria-hidden="true" />
                Last checked {formatDateTime(healthApi.data.timestamp)}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
