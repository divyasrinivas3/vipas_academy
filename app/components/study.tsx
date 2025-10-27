"use client";
import Image from "next/image";

export default function Study() {
  return (
    <section className="relative bg-white py-24 mb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 flex items-center justify-center">
        <Image
          src="./Expert Mentorship.png" // 👉 replace with your image path
          alt="Why Choose Us"
          width={3000}
          height={200} 
          className=" object-cover h-auto"
          priority
        />
      </div>
    </section>
  );
}
