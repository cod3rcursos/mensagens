import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import ExceptionUtils from './exception.utils';
import ValidationException from 'src/error/validation.exception';

@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    ExceptionUtils.catch(exception, host, 400);
  }
}
