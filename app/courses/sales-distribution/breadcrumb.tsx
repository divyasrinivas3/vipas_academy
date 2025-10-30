import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center max-w-7xl mx-auto space-x-2 mt-20 text-md font-sora font-bold mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
          {item.href ? (
            <a href={item.href} className="text-gray-600 text-lg hover:text-teal-600 transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-900 text-lg font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
