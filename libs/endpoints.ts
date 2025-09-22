export const getAllCourses =
  (process.env.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000") + "/api/courses/getAll";