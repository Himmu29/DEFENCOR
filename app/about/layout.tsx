import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DEFENCOR's mission, vision, and legacy in providing elite security services and consultancy globally.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
