import type { CertificationRepository } from "@/certifications/domain/repository/CertificationRepository";
import type { CertificationProps, Certification } from "@/certifications/domain/entities/Certification";
import { HttpRequest } from "@/server/HTTPRequest";
import { getAll, getById } from "./endpoints";
import { toDomain } from "./persistence/CertificationMapper";

export class CertificationsRepositoryImpl implements CertificationRepository {
  // If you have config or client injection, add it here (for tests you can mock httpRequest)
  constructor(private readonly client = new HttpRequest()) {}

  async findAll(): Promise<Certification[]> {
    const { data } = await this.client.get<{ data: CertificationProps[] }>(getAll);
    const rows = data ?? [];
    return rows.map((r: CertificationProps) => toDomain(r));
  }

  async findById(id: string): Promise<Certification | null> {
    const { data } = await this.client.get<{ data: CertificationProps }>(
      getById(id)
    );
    if (!data) return null;
    return toDomain(data);
  }
}
