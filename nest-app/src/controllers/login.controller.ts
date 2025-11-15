import { Controller, Post } from '@nestjs/common';
import { LoginService } from 'src/services/login.services';
import { Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
@Controller('/login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  async Login(@Req() req: Request, @Res() res: Response) {
    const { email, password } = req.body;
    const query = await this.loginService.Login(email, password);
    if (query.length === 0) res.sendStatus(401);
    res.sendStatus(200);
  }
}
