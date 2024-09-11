import { ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

export default class ExceptionUtils {
  static catch(exception: any, host: ArgumentsHost, status: number) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      errors: exception.errors,
    });
  }
}
