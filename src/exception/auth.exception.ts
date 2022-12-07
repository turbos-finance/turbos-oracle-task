import { BusinessException } from "./business.exception";

export class wrongSuiAddressException extends BusinessException {
  constructor() {
    super(1000, "Wrong Sui address");
  }
}

export class tokenNotExistException extends BusinessException {
  constructor() {
    super(1001, "The token does not exist");
  }
}

export class insufficientTokenBalanceException extends BusinessException {
  constructor() {
    super(1002, "Insufficient faucet token balance");
  }
}

export class alreadyClaimedException extends BusinessException {
  constructor() {
    super(1003, "Claimed it already, try again 1 hours later");
  }
}

export class busyException extends BusinessException {
  constructor() {
    super(1004, "Busy now, try again later");
  }
}
