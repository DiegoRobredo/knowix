"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const CertificationPage = () => {
  const searchParams = useSearchParams();
  const certificationId = searchParams.get("certification_id");

  console.log("Certification ID:", certificationId);
    
  return (
    <div>
      <h1>Certification Details</h1>
      {/* Add your certification details here */}
    </div>
  );
};

export default CertificationPage;
