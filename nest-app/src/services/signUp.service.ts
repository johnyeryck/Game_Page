import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from '@/src/providers/database.provider';
@Injectable()
export class SignUpService {
  constructor(@Inject(PG_CONNECTION) private pool: Pool) {}
  async SignUp(email: string, password: string, username: string) {
    const CreateUser = await this.pool
      .query(
        'INSERT INTO usuarios (email,password,username) VALUES($1,$2,$3)',
        [email, password, username],
      )
      .then((res) => {
        return res.rows;
      })
      .catch((err) => {
        return err;
      });
    return CreateUser;
  }
}
