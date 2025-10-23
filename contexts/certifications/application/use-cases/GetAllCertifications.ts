import type { CertificationRepository } from "@/certifications/domain/repository/CertificationRepository";
import type { CertificationProps } from "@/certifications/domain/entities/Certification";
import { toDTO } from "../CertificationMapper";
import type { Certification } from "../../domain/entities/Certification";

export class GetAllCertifications {
  constructor(private readonly repo: CertificationRepository) {}

  async execute(): Promise<CertificationProps[]> {
    const domainCerts: Certification[] = await this.repo.findAll();
    return domainCerts.map((c) => toDTO(c));
  }
}
