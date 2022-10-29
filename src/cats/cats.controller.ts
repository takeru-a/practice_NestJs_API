import { Controller, Get, Post, Body } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService){}

    @Get()
    async findAll(): Promise<Cat[]>{
        return this.catService.findAll();
    }
    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.catService.create(createCatDto);
    }
}