import type { TOption } from "./Option";

export type TQuestion = {
  id: string;
  text: string;
  options: TOption[];
  module: string;
  explanation?: string;
};
