import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './auth/login.module';
import { PrismaModule } from './database/prisma.module';
import { PrismaService } from './database/prisma.service';
import { CategoryModule } from './model/category/category.module';
import { FilesModule } from './model/files/files.module';
import { UserModule } from './model/user/user.module';
import { PaymentModule } from './model/payment/payment.module';
import { OrdersModule } from './model/orders/orders.module';
import { ImageModule } from './model/image/image.module';

@Module({
  imports: [UserModule, PrismaModule, LoginModule, CategoryModule, FilesModule, ImageModule, PaymentModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}