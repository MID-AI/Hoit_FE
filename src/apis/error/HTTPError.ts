import type { HTTPErrorInfo } from "@/@types/error";

class HTTPError extends Error {
  readonly information: HTTPErrorInfo;

  constructor(errorInfo: HTTPErrorInfo) {
    super(errorInfo.payload.SERVER_MESSAGE);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = this.constructor.name;
    this.information = errorInfo;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  toString(): string {
    return `[${this.name}] ${this.information.statusCode}: ${this.message}`;
  }
  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      statusCode: this.information.statusCode,
      message: this.message,
      information: this.information,
    };
  }
}

export default HTTPError;
