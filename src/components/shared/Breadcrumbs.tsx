import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  Breadcrumb as BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shared/breadcrumb-primitives";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="flex flex-col gap-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <BreadcrumbItem key={item.path + i}>
              <BreadcrumbSeparator>
                <ChevronRight className="h-3 w-3" />
              </BreadcrumbSeparator>
              {isLast ? (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.path}>{item.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
      <SchemaJsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, ...items])}
      />
    </div>
  );
}