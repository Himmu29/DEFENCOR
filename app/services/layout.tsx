import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore DEFENCOR's comprehensive security services, including Manned Guarding, Risk Assessment, Event Security, and Consultancy.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
