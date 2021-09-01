import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getAllUsers(): Promise<string> {
    return 'Hello World!';
  }

  async getUserById(id: number): Promise<string> {
    return 'Hello World!';
  }
}
