import type { CertificationRepository } from "@/certifications/domain/repository/CertificationRepository";
import type { CertificationProps } from "@/certifications/domain/entities/Certification";
import { toDTO } from "../CertificationMapper";
import type { Certification } from "@/certifications/domain/entities/Certification";

export class GetCertificationById {
  constructor(private readonly repo: CertificationRepository) {}

  async execute(id: string): Promise<CertificationProps | null> {
    const domainCert: Certification | null = await this.repo.findById(id);
    return domainCert ? toDTO(domainCert) : null;
  }
}
