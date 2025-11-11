import { Controller, Get, Inject, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import { GameProfileService } from 'src/services/gameProfile.service';

@Controller('/game/profile/:id')
export class GameProfile {
  constructor(public readonly GameProfileservices: GameProfileService) {}
  @Get()
  async GameProfile(@Param('id') params: any, @Res() res: Response) {
    const data = await this.GameProfileservices.GetGameProfile(params);
    console.log(data);
    res.json(data);
  }
}
