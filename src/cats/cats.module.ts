import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    //共有モジュールとして登録
    //複数モジュール間で共有できる
    exports:[CatsService]
})
export class CatsModule {}
