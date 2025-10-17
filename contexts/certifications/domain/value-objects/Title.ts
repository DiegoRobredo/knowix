import { DomainError } from "../errors/DomainError";
import { ErrorCodes } from "../errors/ErrorCodes";

export class Title {
  private constructor(public readonly value: string) {}
  //TODO: adjust min and max according to requirements
  static MIN = 3;
  static MAX = 200;

  static create(value: string) {
    const trimmed = value?.trim() ?? "";
    if (trimmed.length < Title.MIN) throw new DomainError(ErrorCodes.TITLE_TOO_SHORT);
    if (trimmed.length > Title.MAX) throw new DomainError(ErrorCodes.TITLE_TOO_LONG);
    return new Title(trimmed);
  }
}
