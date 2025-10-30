"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex items-center text-sm mt-20 mb-10" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-gray-500 font-sans font-bold text-lg hover:text-gray-900">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-sora font-bold text-lg ">{item.label}</span>
            )}

            {!isLast && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
          </div>
        );
      })}
    </nav>
  );
}
