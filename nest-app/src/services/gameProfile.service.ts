import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from '@/src/providers/database.provider';

@Injectable()
export class GameProfileService {
  constructor(@Inject(PG_CONNECTION) private pool: Pool) {}
  async GetGameProfile(params: any) {
    const getGameProfile = await this.pool.query(
      'SELECT * FROM jogos WHERE id = $1',
      [params],
    );
    return getGameProfile.rows;
  }
}
