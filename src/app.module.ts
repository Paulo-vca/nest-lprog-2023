import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { PrismaService } from './database/prisma.service';
import { FilesModule } from './model/files/files.module';
import { UserModule } from './model/user/user.module';


@Module({
  imports: [UserModule, PrismaModule, AuthModule, FilesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
