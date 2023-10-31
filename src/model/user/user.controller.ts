import { Body, Controller, Post, Get, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';
import { UserDTO } from '../user';
import { DeleteUserDto } from './dto/delete-user-dto';
import { LogInterceptor } from 'src/common/interceptors/log.interceptor';
// import { UpdateUserDto } from './dto/update-user-dto';



@Controller('user')
@UseInterceptors(LogInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<UserDTO[]> {
    return this.userService.findAll();
  }

  @Get()
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Delete('/:id')
  remove(@Param('id') id: string, @Body() pwd: DeleteUserDto) {
    return this.userService.delete(id, pwd);
  }

  // @Patch('/:id')
  // updade(@Param('id') id: string, @Body() user: UpdateUserDto) {
  //   return this.userService.update(id, user);
  // }
}