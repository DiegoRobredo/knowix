import { getAllCertifications } from "../infrastructure/Certifications";
import type { TCertification } from "@/types/Certification";

export async function fetchAllCertifications(): Promise<TCertification[]> {
  const certifications = await getAllCertifications();
  return certifications;
}
