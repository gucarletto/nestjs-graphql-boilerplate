import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';

@Injectable()
export class TransactionsService {
  @Query(() => String)
  async getAllTransactions(): Promise<string> {
    return 'Hello World!';
  }

  @Query(() => String)
  async getTransactionById(id: number): Promise<string> {
    return 'Hello World!';
  }
}
