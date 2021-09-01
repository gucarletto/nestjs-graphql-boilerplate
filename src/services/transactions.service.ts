import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  async getAllTransactions(): Promise<string> {
    return 'Hello World!';
  }

  async getTransactionById(id: number): Promise<string> {
    return 'Hello World!';
  }
}
