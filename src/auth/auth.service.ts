import { Injectable , ForbiddenException} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    async signup(dto: AuthDto){
        //パスワードのハッシュ化
        const hash = await argon.hash(dto.password);
        // DBにユーザ情報を保存
        try{
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
            
        });
        delete user.hash;
        return user;
    }catch(error){
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code === 'P2002'){
            throw new ForbiddenException(
                'Credentials taken',
            );
            }
        }
        throw error;
    }
    }
    async signin(dto: AuthDto){
        const user = await this.prisma.user.findUnique({
            where:{
                email: dto.email,
            },
        });
        // ユーザがいない場合のエラー処理
        if (!user) throw new ForbiddenException(
            'Credentials incorrect'
        );

        //パスワードの検証
        const pwMatches = await argon.verify(
            user.hash,
            dto.password,
        );
        // パスワードが不正な場合のエラー処理
        if (!pwMatches) throw new ForbiddenException(
            'Credentials incorrect'
        );

        delete user.hash;
        return user;
    }
}
