import type { TCertification } from "@/types/Certification";
import httpRequest from "@/server/HTTPRequest";
import { getAll, getById } from "./endpoints";

export async function getAllCertifications(): Promise<TCertification[]> {
  const { data } = await httpRequest.get<{ data: TCertification[] }>(getAll);
  return data;
}

export async function getCertificationById(
  id: string
): Promise<TCertification> {
  const { data } = await httpRequest.get<{ data: TCertification }>(getById(id));
  return data;
}
