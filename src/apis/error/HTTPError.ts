export interface HTTPErrorInfo {
  message?: string;
  payload: {
    HEADING: string;
    BODY: string;
    BUTTON: string;
  };
}

class HTTPError extends Error {
  readonly statusCode: number;
  readonly information: HTTPErrorInfo;

  constructor(statusCode: number, errorInfo: HTTPErrorInfo) {
    super(errorInfo.message ?? errorInfo.payload.HEADING);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.information = errorInfo;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  toString(): string {
    return `[${this.name}] ${this.statusCode}: ${this.message}`;
  }
  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      statusCode: this.statusCode,
      message: this.message,
      information: this.information,
    };
  }
}

export default HTTPError;
