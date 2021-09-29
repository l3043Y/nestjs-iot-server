import { Module } from '@nestjs/common/decorators';
import { mongoDbProviders } from './mongodb.provider';

@Module({
  providers: [...mongoDbProviders],
  exports: [...mongoDbProviders],
})
export class MongoDbModule {

}