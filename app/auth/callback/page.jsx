"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";


export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = async () => {
      // Get session after redirect
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error.message);
        router.push("/auth-error"); // optional error page
        return;
      }

      if (data.session) {
        // ✅ User logged in, go to dashboard
        router.push("/dashboard");
      } else {
        // ❌ No session, go back to login
        router.push("/");
      }
    };

    handleRedirect();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-semibold">Finishing up login...</p>
    </div>
  );
}
