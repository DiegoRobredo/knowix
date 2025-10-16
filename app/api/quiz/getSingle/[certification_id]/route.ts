import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { TQuiz } from "@/types/Quiz/Quiz";
import CloudPractitioner from "@/data/quizzes/aws-cloud-practitioner.json" with { type: "json" };
import DeveloperAssociate from "@/data/quizzes/aws-developer-associate.json" with { type: "json" };

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay for demonstration purposes
  try {
    return NextResponse.json({ data: CloudPractitioner as TQuiz });
  } catch (err) {
    return NextResponse.error();
  }
}