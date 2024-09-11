import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import InternalException from 'src/error/internal.expection';
import ExceptionUtils from './exception.utils';

@Catch(InternalException)
export class InternalExceptionFilter implements ExceptionFilter {
  catch(exception: InternalException, host: ArgumentsHost) {
    ExceptionUtils.catch(exception, host, 500);
  }
}
