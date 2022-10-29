import { Controller, Get, HttpStatus, Param, Post, Redirect, Req, Res } from '@nestjs/common';
import { Response, Request} from 'express';
@Controller('cats')
export class CatsController {
@Get()
  findAll(): string {
    return "This action returns all cats";
  }

  //@Req リクエストを取得
  @Get("/hello")
  Hello(@Req() req: Request): string {
    return `${req.hostname}, Hello!`;
  }

  @Get("/res")
  Response(@Res() res: Response){
    return res.status(HttpStatus.OK).json([]);
  }

  //ルートパラメータ
  @Get(':id')
  RootParam(@Param('id') id): string{
    return `${id}匹目の猫！`;
  }
//リダイレクト
  @Get("/redirect")
  @Redirect('https://nestjs.com/')

  @Post()
  create(): string{
    return "create!";
  }
}