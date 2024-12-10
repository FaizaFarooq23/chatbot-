import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminDashboard from "@/components/adminDashboard";
import Dashboard from "@/components/dashboard";
import Loader from "@/components/loader";

export default function Index() {
  const router = useRouter();
  const { isAdmin } = router.query;
  const [loading, setLoading] = useState(true);
  const [isAdminUser, setIsAdminUser] = useState(null);

  useEffect(() => {
    if (isAdmin !== undefined) {
      setIsAdminUser(isAdmin === "true");
      setLoading(false);
    }
  }, [isAdmin]);

  if (loading) {
    return <Loader />;
  }

  return <div>{isAdminUser ? <AdminDashboard /> : <Dashboard />}</div>;
}
