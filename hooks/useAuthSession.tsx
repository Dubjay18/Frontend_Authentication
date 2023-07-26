import authUtil from "@/utils/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuthSession() {
  const user = authUtil.getSession();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);
  return user;
}
