export const getAll = "/api/certifications/getAll";
export function getById(id: string): string {
  return `/api/certifications/getById/${id}`;
}
