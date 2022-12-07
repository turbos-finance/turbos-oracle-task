import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";
import { BusinessException } from "../exception/business.exception";

@Catch(HttpException, BusinessException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: number;
    let code: number;
    
    if (exception instanceof BusinessException) {
      code = exception.getBusinessCode();
      status = 200;
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      code = status;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      code = status;
    }
    const res: any = exception.getResponse();

    const message = res.message || exception.message;

    response.status(status).json({
      code: code,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}