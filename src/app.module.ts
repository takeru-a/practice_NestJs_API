import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  //下位のモジュールを登録
  imports: [CatsModule, AuthModule, BookmarkModule],
  //コントローラを登録
  controllers: [AppController],
  //プロバイダを登録
  providers: [AppService],
})
export class AppModule {}
