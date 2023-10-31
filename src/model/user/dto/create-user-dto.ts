import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Description placeholder
 * @date 16/10/2023 - 21:30:50
 *
 * @export
 * @class CreateUserDto
 * @typedef {CreateUserDto}
 */
export class CreateUserDto implements User {
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'example@example.com'
  })
  @IsEmail()
  email: string;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {string}
   */
  @ApiProperty({
    example:'aA1@abc'
  })
  @IsStrongPassword()
  password: string;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {?string}
   */
  @ApiProperty({
    example:'example'
  })
  @IsString()
  @IsOptional()
  name?: string;

  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {?string}
   */
  @IsString()
  @IsOptional()
  address?: string;
}
