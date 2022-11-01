import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  //下位のモジュールを登録
  imports: [CatsModule, AuthModule, BookmarkModule, UserModule, PrismaModule],
  //コントローラを登録
  controllers: [AppController],
  //プロバイダを登録
  providers: [AppService],
})
export class AppModule {}
