import { GetAllCertifications } from "@/contexts/certifications/application/use-cases/GetAllCertifications";
import { GetCertificationById } from "@/contexts/certifications/application/use-cases/GetCertificationById";
import { CertificationsRepositoryImpl } from "@/certifications/infrastructure/CertificationRepositoryImpl";

const repo = new CertificationsRepositoryImpl(); // or inject a shared http client
const getAllUseCase = new GetAllCertifications(repo);
const getByIdUseCase = new GetCertificationById(repo);

export async function getAllCertifications() {
  return getAllUseCase.execute();
}

export async function getCertificationById(id: string) {
  return getByIdUseCase.execute(id);
}
