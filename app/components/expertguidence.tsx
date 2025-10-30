"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import {
  educationOptions,
  planOfFutureOptions,
  careerOptionsMap,
  ContactFormData,
  PlanOfFuture,
} from "../types/form";
import { contactFormSchema, ContactFormSchema } from "../schemas/contact";

export default function ContactForm() {
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
      education: "",
      planOfFuture: "",
      careerPath: "",
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
      if (!res.ok) throw new Error("Form submission failed");

      alert("✅ Thank you! We got your details and will contact you soon.");
      reset();
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          type="text"
          {...register("name")}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your full name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Contact */}
      <div>
        <label className="block text-sm font-medium mb-2">Contact Number *</label>
        <input
          type="text"
          {...register("contact")}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your contact number"
        />
        {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">Email Address *</label>
        <input
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Education & Plan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Education *</label>
          <select
            {...register("education")}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Education</option>
            {educationOptions.map((edu) => (
              <option key={edu} value={edu}>{edu}</option>
            ))}
          </select>
          {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Plan of Future *</label>
          <select
            {...register("planOfFuture")}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Plan</option>
            {planOfFutureOptions.map((plan) => (
              <option key={plan} value={plan}>{plan}</option>
            ))}
          </select>
          {errors.planOfFuture && <p className="text-red-500 text-sm mt-1">{errors.planOfFuture.message}</p>}
        </div>
      </div>

      {/* Career Path */}
      {selectedPlan && (
        <div>
          <label className="block text-sm font-medium mb-2">Career Path *</label>
          <Controller
            control={control}
            name="careerPath"
            render={({ field }) => (
              <select
                {...field}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Career Path</option>
                {careerOptionsMap[selectedPlan].map((career) => (
                  <option key={career} value={career}>{career}</option>
                ))}
              </select>
            )}
          />
          {errors.careerPath && <p className="text-red-500 text-sm mt-1">{errors.careerPath.message}</p>}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center justify-center space-x-2"
      >
        <span>{loading ? "Sending..." : "Send Message"}</span>
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
