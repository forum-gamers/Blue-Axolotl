"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type VerifyTokenMessageProps = {
  checkToken: (token: string) => Promise<void>;
};
export default function VerifyTokenMessage({
  checkToken,
}: VerifyTokenMessageProps) {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams()!);
  const token = searchParams.get("token");
  const error = searchParams.get("error");
  const verified = searchParams.get("verified");

  useEffect(() => {
    (async () => {
      if (token) {
        await checkToken(token);
      }

      router.push("/login");
    })();
  }, [token]);

  if (error) return <p className="text-red-500">{error}</p>;
  return <div>Verification success</div>;
}
