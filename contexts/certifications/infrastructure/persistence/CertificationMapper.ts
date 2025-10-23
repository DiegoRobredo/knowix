import type { CertificationProps } from "@/certifications/domain/entities/Certification";
import { Certification } from "@/certifications/domain/entities/Certification";

export function toDomain(row: CertificationProps): Certification {
  return Certification.fromPersistence({
    id: row.id,
    title: row.title,
    description: row.description,
    provider: row.provider,
    level: row.level,
  });
}