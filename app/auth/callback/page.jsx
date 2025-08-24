"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      // check immediately
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        router.push("/dashboard");
        return;
      }

      // also listen for future auth state changes
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      });

      return () => subscription.unsubscribe();
    };

    handleAuth();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-semibold">Finishing up login...</p>
    </div>
  );
}
