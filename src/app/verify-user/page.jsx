"use client"
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyUserPage = () => {
  const [status, setStatus] = useState("");
  const [token, setToken] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const urlToken = searchParams.get("token"); // Retrieve token from URL
    if (urlToken) {
      setToken(urlToken); // Store token in state
    } else {
      setStatus("Invalid or missing token.");
    }
  }, [searchParams]);

  console.log("Token from url ", token);

  const handleVerify = async () => {
    if (!token) {
      setStatus("Invalid or missing token.");
      console.log("Token from url ", token);
      return;
    }

    try {
      const res = await fetch(`/api/verify?token=${token}`, {
        method: "GET",
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setStatus("Email verified successfully.");
        // Redirect user to home page
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setStatus(data.error || "Verification failed.");
      }
    } catch (error) {
      setStatus("Error verifying email.");
    }
  };

  return (
    <div className="justify-center items-center m-4">
      <h1>Email Verification</h1>
      <p className="text-red-500">Status: {status}</p>
      <button className="p-2 bg-primary text-white" onClick={handleVerify}>Verify Email</button>
    </div>
  );
};

const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <VerifyUserPage />
  </Suspense>
);

export default SuspenseWrapper;
