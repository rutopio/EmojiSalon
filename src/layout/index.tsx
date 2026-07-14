import type { ReactNode } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

interface PageLayoutProps {
  children: ReactNode;
  outerClassName?: string;
  innerClassName?: string;
}

export default function PageLayout({
  children,
  outerClassName = "h-full",
  innerClassName = "flex min-h-full flex-col",
}: PageLayoutProps) {
  return (
    <div className={outerClassName}>
      <div className={innerClassName}>
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
