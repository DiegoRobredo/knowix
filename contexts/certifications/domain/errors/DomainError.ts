export class DomainError extends Error {
  public readonly code: string;
  public readonly meta?: Record<string, unknown>;

  constructor(code: string, message?: string, meta?: Record<string, unknown>) {
    super(message ?? code);
    this.name = "DomainError";
    this.code = code;
    this.meta = meta;
    // restore prototype chain
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
