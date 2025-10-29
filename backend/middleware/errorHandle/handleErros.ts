import HandleError from "./errorsDefault.js";

export class EmailAlreadyExist extends HandleError {
  constructor(message: string) {
    super(message, 409);
  }
}
