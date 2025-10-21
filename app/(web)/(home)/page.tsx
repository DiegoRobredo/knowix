import React, { Suspense } from "react";
import CertificationsSection from "@/containers/home-page/certification-section";

export default function Home() {
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center gap-12 p-8">
      <CertificationsSection />
    </main>
  );
}
