import type { TQuestion } from "./Question";

export type TQuiz = {
    id: string;
    title: string;
    description: string;
    certification_id: string;
    questions: TQuestion[];
}