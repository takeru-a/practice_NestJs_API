import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  //コントローラを登録
  controllers: [AppController, CatsController],
  //プロバイダを登録
  providers: [AppService, CatsService],
})
export class AppModule {}
