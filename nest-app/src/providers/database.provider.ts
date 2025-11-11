import { Pool } from 'pg';
import { Module } from '@nestjs/common';
export const PG_CONNECTION = 'PG_CONNECTION';

const dbProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    host: 'localhost',
    database: 'cadastros_usuarios',
    password: '1234',
    user: 'postgres',
    port: 5432,
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}
