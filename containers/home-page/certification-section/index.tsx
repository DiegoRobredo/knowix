import React, { FC } from "react";
import axios from "axios";
import CertificationCard from "@/components/CertificationCard";
import type { TCertification } from "@/types/Certification";
import { getAllCertifications } from "@/libs/endpoints";

const CertificationsSection: FC = async() => {

    const certifications: TCertification[] = await axios.get(getAllCertifications).then(res => res.data.data);

    return (
      <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center gap-12 w-full">
        {certifications.map(certification => (
          <CertificationCard key={certification.id} {...certification} />
        ))}
      </section>
    );
}

export default CertificationsSection;