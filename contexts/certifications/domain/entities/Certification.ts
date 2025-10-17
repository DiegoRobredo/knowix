import { TCertification } from "@/types/Certification";

export class Certification {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly provider: string,
    public readonly level: string
  ) {}

  static create(props: TCertification) {
    return new Certification(
      props.id,
      props.title,
      props.description,
      props.provider,
      props.level
    );
  }
}