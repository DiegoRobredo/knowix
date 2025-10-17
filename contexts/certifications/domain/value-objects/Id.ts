import { DomainError } from "../errors/DomainError";
import { ErrorCodes } from "../errors/ErrorCodes";

export class Id {
  private static readonly UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  private constructor(public readonly value: string) {}

  static create(value: string) {
    const trimmed = value?.trim() ?? "";
    if (!trimmed) throw new DomainError(ErrorCodes.ID_EMPTY);
    if (!Id.UUID_REGEX.test(trimmed))
      throw new DomainError(ErrorCodes.ID_INVALID);
    return new Id(trimmed);
  }
}
