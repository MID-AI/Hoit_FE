import type { HTTPErrorInfo } from "@/@types/error";

/**
 * API 응답에 대한 에러 정보를 담는 커스텀 에러 클래스
 * @param errorInfo - 상태 코드와 메시지를 포함하는 에러 정보 객체
 * toString() : 에러를 문자열로 출력할 때 사용
 * toJSON() : 직렬화 형태
 */
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
