import { Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MONGODB_PROVIDER } from './constants';
import {} from '@nestjs/platform-fastify';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject(MONGODB_PROVIDER) private readonly db: any) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  savePostValue(@Req() request) {
    // console.log('rq',request.body)
    this.db.collection('eMeter').insertOne(request.body, (err, result) => {
      if (err) {
        // response.status(500).json(err);
        return `Error: ${err}`
      } else {
        // response.status(201);
        // response.send(result);
        return `OKAY: ${result}`
      }
    });
  }
}
