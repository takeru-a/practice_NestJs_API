import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  //コントローラを登録
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
