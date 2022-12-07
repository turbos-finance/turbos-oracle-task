import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpStatus, BadRequestException, RequestTimeoutException, HttpException
  } from '@nestjs/common';
  import { Observable, TimeoutError } from 'rxjs';
  import { catchError, timeout } from 'rxjs/operators';
  import { BusinessException } from '../exception/business.exception';
  
  @Injectable()
  export class ErrorsInterceptor implements NestInterceptor {
    constructor() { }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next
        .handle()
        .pipe(
          timeout(10000),
          catchError(async err => {
            if (err instanceof TimeoutError) {
              const error: any = new RequestTimeoutException({ code: HttpStatus.REQUEST_TIMEOUT, message: 'Request timed out, try again' });
              return error.response;
            }
  
            const req = context.getArgs()[0];
            if (err.response) {
              if (err instanceof BusinessException) {
                return {
                  code: err.getBusinessCode(),
                  message: err.message,
                };
              } else {
                return {
                  code: err.response.statusCode ? err.response.statusCode : err.response.code,
                  message: err.response.message
                };
              }
            } else {
              const error: any = new BadRequestException({
                code: HttpStatus.BAD_REQUEST,
                message: err.message
              });
              return error.response;
            }
          }),
        );
    }
  }