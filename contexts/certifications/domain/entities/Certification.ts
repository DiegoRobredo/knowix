import { Title } from "../value-objects/Title";
import { Id } from "../value-objects/Id";
import { Level } from "../value-objects/Level";

export type CertificationProps = {
  id: string;
  title: string;
  description: string;
  provider: string;
  level: string;
};

export class Certification {
  private constructor(
    public readonly id: string,
    private readonly props: CertificationProps
  ) {}

  static create(id: string, props: CertificationProps): Certification {
    // validate using VOs (will throw DomainError if invalid)
    Id.create(id);
    Title.create(props.title);
    Level.create(props.level);
    // description/provider can be validated here if required
    return new Certification(id, props);
  }

  // Hydrate from persistence/infra without firing creation logic/events
  static fromPersistence(data: {
    id: string;
    title: string;
    description: string;
    provider: string;
    level: string;
  }): Certification {
    // Note: we validate Id and Level/Title as they are domain invariants
    Id.create(data.id);
    Title.create(data.title);
    Level.create(data.level);
    return new Certification(data.id, {
      id: data.id,
      title: data.title,
      description: data.description,
      provider: data.provider,
      level: data.level,
    });
  }

  // Accessors
  get title(): string {
    return this.props.title;
  }
  get description(): string {
    return this.props.description;
  }
  get provider(): string {
    return this.props.provider;
  }
  get level(): string {
    return this.props.level;
  }
}