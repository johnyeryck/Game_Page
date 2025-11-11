import { Injectable, Inject } from '@nestjs/common';
import { PG_CONNECTION } from '../providers/database.provider';
import { Pool } from 'pg';
@Injectable()
export class AppService {
  constructor(@Inject(PG_CONNECTION) private pool: Pool) {}
  async GetdataGames() {
    const fetch = await this.pool.query('SELECT * FROM jogos');
    return fetch.rows;
  }
}
