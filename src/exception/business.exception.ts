import { HttpException, HttpStatus } from "@nestjs/common";

export class BusinessException extends HttpException {
    private readonly businessCode: number;

    constructor(businessCode: number, description: string, objectOrError?: string | object) {
        super(
            HttpException.createBody(objectOrError, description, HttpStatus.OK),
            HttpStatus.OK
        );
        this.businessCode = businessCode;
    }

    getBusinessCode() {
        return this.businessCode;
    }
}