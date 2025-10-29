export default class HandleError extends Error {
  public readonly statuscode: number;
  constructor(message: string, statuscode: number) {
    super(message);
    this.statuscode = statuscode;
  }
}

export class NotAuthorized extends HandleError {
  constructor(message: string) {
    super(message, 401);
  }
}
export class NotFound extends HandleError {
  constructor(message: string) {
    super(message, 404);
  }
}
