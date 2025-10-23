import type { CertificationProps } from "@/certifications/domain/entities/Certification";
import { Certification } from "@/certifications/domain/entities/Certification";

export function toDTO(cert: Certification): CertificationProps {
  return {
    id: cert.id,
    title: cert.title,
    description: cert.description,
    provider: cert.provider,
    level: cert.level,
  };
}