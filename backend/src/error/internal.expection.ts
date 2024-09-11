import ErrorData from './error.data';

export default class InternalException extends Error {
  constructor(public readonly errors: ErrorData[]) {
    super(errors.map((e) => e.message).join(', '));
  }

  static fromMessage(message: string): InternalException {
    return new InternalException([{ message }]);
  }

  static fromMessages(...messages: string[]): InternalException {
    return new InternalException(messages.map((message) => ({ message })));
  }

  static fromError(error: ErrorData): InternalException {
    return new InternalException([error]);
  }

  static fromErrors(...errors: ErrorData[]): InternalException {
    return new InternalException(errors);
  }
}
