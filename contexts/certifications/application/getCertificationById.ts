import { getCertificationById } from "../infrastructure/Certifications";
import type { TCertification } from "@/types/Certification";

export async function fetchCertificationById(
  id: string
): Promise<TCertification | null> {
  const certification = await getCertificationById(id);
  return certification;
}
