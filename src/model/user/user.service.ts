import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './../user';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      const hashedPwd = await hash(createUserDto.password, 10);

      const lowerEmail = createUserDto.email.toLowerCase();
      await this.prisma.user.create({
        data: {
          ...createUserDto,
          role: 'USER',
          email: lowerEmail,
          password: hashedPwd,
        },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findAll(): Promise<UserDTO> {
    return await this.prisma.user.findMany();
    users.forEach((User) => delete User.password);
    return users;
  }

  async findByEmail(email: string): Promise<UserDTO>{
    const lowerEmail = email.toLowerCase();
    const user = await this.prisma.user.findUnique({
      where: { email: lowerEmail},
    })
    delete user.password;
    return user; 
  }

  async update(id: string, userDTO: UserDTO){
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...userDTO, updatedAt: new Date() },
    });
    delete user.password;
    return user;
  }

  async delete(id: string, PWD: string){
    // validar senha para deletar

    await this.validatePwd(id, pwd);

    return this.prisma.user.delete({ where: { id } });
  }
  private async validatePwd(id: string, current: string): Promise<void>
  const user = this.prisma.user.findUnique({ where: { id } });
  const isCorrectPwd = await compare(currentPwd, (await user).password);

  if (!isCorrectPwd){
    // exception
    console.log('pwd is incorrent!');
  }

}
