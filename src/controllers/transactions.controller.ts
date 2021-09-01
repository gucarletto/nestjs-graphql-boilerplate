import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('transactions')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<string> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async findSpecificUser(@Param('id') id: number): Promise<string> {
    return this.usersService.getUserById(id);
  }
}
