"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  educationOptions,
  planOfFutureOptions,
  careerOptionsMap,
  inquiryTypeOptions,
  ContactFormData,
  PlanOfFuture,
} from "../types/form";
import { contactFormSchema } from "../schemas/contact";

export default function ContactPage() {
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
        style: {
          background: "#16a34a", // green-600
          color: "#fff",
          fontWeight: "600",
          padding: "12px 20px",
          borderRadius: "8px",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#16a34a",
        },
        position: "top-right",
      });

      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        style: {
          background: "#dc2626", // red-600
          color: "#fff",
          fontWeight: "600",
          padding: "12px 20px",
          borderRadius: "8px",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#dc2626",
        },
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522205408450-add114ad53fe?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-5xl font-bold text-white z-10">
          Contact Us
        </h1>
      </section>

      {/* Contact Details + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 99666 52099</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@vipasacademy.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Door no. 19-8-112/d, Second floor, Kora Towers, <br />
                      Hathiramji Colony, Near Annamiah Circle, <br />
                      Air Bypass Road, Tirupati, Andhra Pradesh, India 517501
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7374394066156!2d79.42629337509896!3d13.627740186776024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b8eaaaaaaa%3A0x9c61629509d825b5!2sVipas%20Academy!5e0!3m2!1sen!2sin!4v1698765487564!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              {/* Name */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Contact */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  {...register("contact")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your contact number"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contact.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Inquiry Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  {...register("inquiryType")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Inquiry Type</option>
                  {inquiryTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.inquiryType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.inquiryType.message}
                  </p>
                )}
              </div>

              {/* Education & Plan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Education
                  </label>
                  <select
                    {...register("education")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Education</option>
                    {educationOptions.map((edu) => (
                      <option key={edu} value={edu}>
                        {edu}
                      </option>
                    ))}
                  </select>
                  {errors.education && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.education.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plan of Future
                  </label>
                  <select
                    {...register("planOfFuture")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Plan</option>
                    {planOfFutureOptions.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                  {errors.planOfFuture && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.planOfFuture.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Career Path */}
              {selectedPlan && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Career Path
                  </label>
                  <Controller
                    control={control}
                    name="careerPath"
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Career Path</option>
                        {(careerOptionsMap[selectedPlan] || []).map(
                          (career) => (
                            <option key={career} value={career}>
                              {career}
                            </option>
                          )
                        )}
                      </select>
                    )}
                  />
                  {errors.careerPath && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.careerPath.message}
                    </p>
                  )}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 mt-10 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </>
  );
}
