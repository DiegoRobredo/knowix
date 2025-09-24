import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { TCertification } from "@/types/Certification";

const certificates: TCertification[] = [
  { id: "1", title: "React", description: "Frontend Library", provider: "Meta", level: "Intermediate" },
  { id: "2", title: "Next.js", description: "React Framework", provider: "Vercel", level: "Advanced" },
  { id: "3", title: "Node.js", description: "Backend Framework", provider: "Node.js Foundation", level: "Intermediate" },
];

export async function GET(request: NextRequest) {

  await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate a delay for demonstration purposes
  try {
    return NextResponse.json({ data: certificates });
  } catch (err) {
    return NextResponse.error();
  }
}