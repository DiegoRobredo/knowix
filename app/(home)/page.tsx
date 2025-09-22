import React, { use, Suspense } from "react";
import CoursesSection from "@/containers/home-page/courses-section";

export default function Home() {

  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center gap-12 p-8">
      <Suspense fallback={<p>Loading...</p>}>
        <CoursesSection />
      </Suspense>
    </main>
  );
}
