import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { SignUpService } from 'src/services/signUp.service';
import { SignUpdto } from '../signUp.dto';

@Controller('/signup')
export class SignUpControler {
  constructor(private Create: SignUpService) {}

  @Post()
  async SignUp(@Req() req: Request, @Res() res: Response) {
    const { email, password, username } = req.body;
    const create = await this.Create.SignUp(email, password, username);
    return create;
  }
}
