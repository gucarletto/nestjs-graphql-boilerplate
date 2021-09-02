import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';

@Injectable()
export class UsersService {
  @Query(() => String)
  async getAllUsers(): Promise<string> {
    return 'Hello World!';
  }

  @Query(() => String)
  async getUserById(id: number): Promise<string> {
    return 'Hello World!';
  }
}
