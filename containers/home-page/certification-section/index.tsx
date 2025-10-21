"use client";

import React, { FC } from "react";
import CertificationCard from "@/components/CertificationCard";
import type { TCertification } from "@/types/Certification";
import { useCertificationList } from "@/certifications/interface/hooks/useCertificationList";

const CertificationsSection: FC = () => {
  const {
    certifications,
    loading,
    error
  }: {
    certifications: TCertification[];
    loading: boolean;
    error: Error | null;
  } = useCertificationList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center gap-12 w-full">
      {certifications.map((certification) => (
        <CertificationCard key={certification.id} {...certification} />
      ))}
    </section>
  );
};

export default CertificationsSection;
