import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { TCertification } from "@/types/Certification";

const certificates: TCertification[] = [
  { id: "aws-cloud-practitioner", title: "AWS Certified Cloud Practitioner", description: "AWS Certification", provider: "Amazon", level: "Foundational" },
  { id: "aws-developer-associate", title: "AWS Certified Developer", description: "AWS Certification", provider: "Amazon", level: "Associate" },
  { id: "azure-developer", title: "Azure Developer", description: "Cloud Development", provider: "Microsoft", level: "Advanced" },
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