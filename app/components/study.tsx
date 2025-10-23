"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-24 mb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 flex items-center justify-center">
        <Image
          src="./Expert Mentorship (6).png" // 👉 replace with your image path
          alt="Why Choose Us"
          width={1800} // maintains same wide layout
          height={200} // adjust as per your image ratio
          className=" object-cover w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
