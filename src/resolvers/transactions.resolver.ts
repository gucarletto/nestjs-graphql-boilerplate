import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from 'src/services/user.service';
import { TransactionService } from 'src/services/transactions.service';
import { Transaction } from '../models/transaction';
import {
  Transaction as PrismaTransaction,
  User as PrismaUser,
} from '@prisma/client';
import { User } from 'src/models/user';

@Resolver(Transaction)
export class TransactionsResolver {
  constructor(
    private readonly usersService: UserService,
    private readonly transactionsService: TransactionService,
  ) {}

  @Query((returns) => [Transaction], { nullable: true })
  async transaction(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PrismaTransaction> {
    return this.transactionsService.transaction({ id: id });
  }

  @Query((returns) => [Transaction], { nullable: true })
  async transactions(): Promise<PrismaTransaction[]> {
    return this.transactionsService.transactions({});
  }

  @ResolveField((returns) => [User])
  async user(@Parent() transaction: PrismaTransaction): Promise<PrismaUser> {
    const { userId } = transaction;
    return this.usersService.user({
      id: userId,
    });
  }
}
