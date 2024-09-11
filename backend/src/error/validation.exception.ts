import ErrorData from './error.data';

export default class ValidationException extends Error {
  constructor(public readonly errors: ErrorData[]) {
    super(errors.map((e) => e.message).join(', '));
  }

  static fromMessage(message: string): ValidationException {
    return new ValidationException([{ message }]);
  }

  static fromMessages(...messages: string[]): ValidationException {
    return new ValidationException(messages.map((message) => ({ message })));
  }

  static fromError(error: ErrorData): ValidationException {
    return new ValidationException([error]);
  }

  static fromErrors(...errors: ErrorData[]): ValidationException {
    return new ValidationException(errors);
  }
}
