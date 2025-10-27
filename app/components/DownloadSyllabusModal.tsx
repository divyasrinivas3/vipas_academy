"use client";

import { useState } from "react";

interface DownloadSyllabusModalProps {
  onClose: () => void;
  fileName: string; // 👈 Example: "SAP-SD.pdf"
  displayName?: string; // 👈 Optional pretty name for downloaded file
}

export default function DownloadSyllabusModal({
  onClose,
  fileName,
  displayName,
}: DownloadSyllabusModalProps) {
  const [step, setStep] = useState<"email" | "otp" | "done">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!email) return alert("Please enter your email");
    setLoading(true);
    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setServerOtp(data.otp);
      alert("OTP sent to your email!");
      setStep("otp");
    } else {
      alert(data.error || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = () => {
    if (otp === serverOtp) {
      setStep("done");

      // ✅ Auto-download the correct file dynamically
      const link = document.createElement("a");
      link.href = `/courses/${fileName}`; // 👈 dynamic file path
      link.download = displayName || fileName; // 👈 rename if desired
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => onClose(), 2000);
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        {step === "email" && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center text-blue-900">Enter your email</h2>
            <input
              type="email"
              className="border p-3 w-full rounded-md mb-4 text-black"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSendOtp}
              className="bg-blue-900 text-white w-full py-2 rounded-md font-semibold"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center text-blue-900">Enter OTP</h2>
            <input
              type="text"
              className="border p-3 w-full rounded-md mb-4 text-black"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleVerifyOtp}
              className="bg-teal-600 text-white w-full py-2 rounded-md font-semibold"
            >
              Verify & Download
            </button>
          </>
        )}

        {step === "done" && (
          <p className="text-center text-teal-600 font-semibold">
            ✅ OTP Verified! Downloading syllabus...
          </p>
        )}

        <button className="text-gray-500 text-sm mt-4 w-full" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
