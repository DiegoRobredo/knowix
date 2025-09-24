"use client";

import Link from "next/link";
import React, { FC } from "react";
import { TCertification } from "@/types/Certification";

const CertificationCard: FC<TCertification> = ({ id, title, description }) => {
  return (
    <Link className="aspect-square border-solid border-1 rounded-md p-4 w-full max-w-[150px]" key={id} href={`/certification/${id}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default CertificationCard;