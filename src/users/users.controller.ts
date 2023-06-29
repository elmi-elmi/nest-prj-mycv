import {
  Controller,
  Post,
  Body,
  // Get,
  // Param,
  // Query,
  // Patch,
  // Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
// import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log('createUser');
    return this.userService.create(body.email, body.password);
  }
  //
  // @Get('/:id')
  // findUser(@Param('id') id: string) {
  //   console.log('findUser');
  //
  //   return this.userService.findOne(parseInt(id));
  // }
  //
  // @Get()
  // findAllUsers(@Query('email') email: string) {
  //   console.log('findAllUsers');
  //
  //   return this.userService.find(email);
  // }
  //
  // @Delete('/:id')
  // removeUser(@Param('id') id: string) {
  //   console.log('removeUser');
  //
  //   return this.userService.remove(parseInt(id));
  // }

  // @Patch('/:id')
  // updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
  //   return this.userService.update(parseInt(id), body);
  // }
}
