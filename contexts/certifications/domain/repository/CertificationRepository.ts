import type { Certification } from "../entities/Certification";

export interface CertificationRepository {
  findAll(): Promise<Certification[]>;
  findById(id: string): Promise<Certification | null>;
}