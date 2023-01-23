import {
  Controller,
  Get,
  Render,
  Query,
  Param,
  Delete,
  Post,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';

@Controller('api/cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async listCats() {
    const [ rows ] = await db.execute(
      'SELECT * FROM macskak ORDER BY id ASC'
    );
    return rows
  }

  @Get(':id')
  async catsId(@Param('id') id : number) {
    const [ rows ] = await db.execute(
      'SELECT * FROM macskak WHERE id = ?',
      [ id ]
    )
    return rows
  }
  @Delete(':id')
  async deleteCatsById(@Param('id') id : number) {
    const [ rows ] = await db.execute(
      'DELETE FROM macskak WHERE id = ?',
      [ id ]
    )
    return ;
  }
  @Post()
  async addCats(@Body() body) {
    const [ rows ] = await db.execute(
      'INSERT INTO `macskak`(-`suly`, `szem_szin`) VALUES (?,?)',
      [ body.suly, body.szem_szin ]
    )
    return rows
  }
}
