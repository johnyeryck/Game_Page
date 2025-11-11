import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from '../providers/database.provider';
@Injectable()
export class LoginService {
  constructor(@Inject(PG_CONNECTION) private pool: Pool) {}
  async Login(email: string, password: string) {
    const GetUser = await this.pool.query(
      'SELECT email FROM usuarios WHERE email = $1 AND password = $2',
      [email, password],
    );
    console.log(GetUser.command);
    return GetUser.rows;
  }
}
