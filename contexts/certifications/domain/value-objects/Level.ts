import { DomainError } from "../errors/DomainError";
import { ErrorCodes } from "../errors/ErrorCodes";

export class Level {
  private constructor(public readonly value: string) {}

  static create(value: string) {
    const trimmed = value?.trim() ?? "";
    if (!trimmed) throw new DomainError(ErrorCodes.LEVEL_INVALID);
    return new Level(trimmed);
  }
}
