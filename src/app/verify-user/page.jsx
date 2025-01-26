"use client"
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyUserPage = () => {
  const [status, setStatus] = useState("");
  const [verified, setVerified] = useState(false);
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
        setVerified(true);
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
    <div className="justify-center items-center flex h-screen">
      <div className="justify-center bg-white p-8 rounded-lg shadow-lg w-2/3 relative">
          <h1 className="text-2xl font-bold mb-4">
              <span className="text-secondary">Room</span>
              <span className="text-primary">Bridge</span>
          </h1>

          <h1>Please verify your email address by clicking the button below</h1>
          
          <div className="flex my-4">
              <button className="bg-primary my-1 p-2 w-1/5 hover:bg-secondary mb-10 text-white font-semibold" onClick={handleVerify}>Verify Email</button>
              <p className={`${verified ? "text-green-500" : "text-red-500"}m-4`}>{status}</p>
          </div>
          
      </div>
    </div>
  );
};

const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <VerifyUserPage />
  </Suspense>
);

export default SuspenseWrapper;
