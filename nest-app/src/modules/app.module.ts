import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { DbModule } from '../providers/database.provider';
import { LoginController } from '../controllers/login.controller';
import { LoginService } from '../services/login.services';
import { SignUpControler } from '../controllers/signUp.controller';
import { SignUpService } from '../services/signUp.service';
import { GameProfile } from '../controllers/profile.controller';
import { GameProfileService } from '../services/gameProfile.service';
@Module({
  imports: [DbModule],
  controllers: [AppController, LoginController, SignUpControler, GameProfile],
  providers: [AppService, LoginService, SignUpService, GameProfileService],
})
export class AppModule {}
