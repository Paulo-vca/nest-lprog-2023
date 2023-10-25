import { Body, Controller, Get, Post, Param, Delete, Patch, update } from '@nestjs/common';
import { UserDTO } from './../user';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.create(createUserDto);
  }
  
  @Get ()
  findAll(): Promise<UserDTO>{
    return this.userService.findAll();
  }

  @Get('/:email')
  findByEmail(@Param('email') email: string){
    return this.userService.findByEmail(email);
  }

  @Delete('/:id')
  remove(@Param('id') id: string, @Body pwd: TIPO){
    return this.userService.delete(id, pwd)
  }

  @Patch('/:id') id: string, @Body user: )
  update(){
    return this.userService.update()
  }

}
