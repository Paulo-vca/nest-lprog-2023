import { CreateUserDto } from './create-user-dto';

export class UpdateUserDto extends PartialType(CreateUserDto){
    currentPassword?: string;
}