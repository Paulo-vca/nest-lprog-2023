import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UserService } from './service/user.service';
import { UserModule } from './model/user/user.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
