import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KennelModule } from './kennel/kennel.module';

@Module({
  imports: [KennelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
