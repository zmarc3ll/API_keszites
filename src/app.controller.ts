import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';
import { from } from 'rxjs';
import { AppService } from './app.service';
import db from './db';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }
}
