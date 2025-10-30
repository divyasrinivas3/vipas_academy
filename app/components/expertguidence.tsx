"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  educationOptions,
  planOfFutureOptions,
  careerOptionsMap,
  inquiryTypeOptions,
  ContactFormData,
  PlanOfFuture,
} from "../types/form";
import { contactFormSchema } from "../schemas/contact";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      education: "" as any,
      planOfFuture: "" as any,
      careerPath: "" as any,
      inquiryType: "" as any,
    },
  });

  const selectedPlan = watch("planOfFuture") as PlanOfFuture;

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      toast.success("Thank you! We’ll contact you soon.", {
        style: { background: "#16a34a", color: "#fff", fontWeight: "600" },
      });
      reset();
      onClose(); // Close after success
    } catch {
      toast.error("Something went wrong. Please try again.", {
        style: { background: "#dc2626", color: "#fff", fontWeight: "600" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 text-left ">
                    Contact Number
                  </label>
                  <input
                    {...register("contact")}
                    placeholder="Enter your contact number"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contact.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
                    Inquiry Type
                  </label>
                  <select
                    {...register("inquiryType")}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Inquiry Type</option>
                    {inquiryTypeOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Education & Plan */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
                      Education
                    </label>
                    <select
                      {...register("education")}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Education</option>
                      {educationOptions.map((edu) => (
                        <option key={edu}>{edu}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
                      Plan of Future
                    </label>
                    <select
                      {...register("planOfFuture")}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Plan</option>
                      {planOfFutureOptions.map((plan) => (
                        <option key={plan}>{plan}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Career Path (conditional) */}
                {selectedPlan && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
                      Career Path
                    </label>
                    <Controller
                      control={control}
                      name="careerPath"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Career Path</option>
                          {(careerOptionsMap[selectedPlan] || []).map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
