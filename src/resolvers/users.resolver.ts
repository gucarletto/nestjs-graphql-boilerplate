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
import { User } from '../models/user';
import { Transaction, User as PrismaUser } from '@prisma/client';

@Resolver(User)
export class UsersResolver {
  constructor(
    private readonly usersService: UserService,
    private readonly transactionsService: TransactionService,
  ) {}

  @Query((returns) => User, { nullable: true })
  async user(@Args('id', { type: () => Int }) id: number): Promise<PrismaUser> {
    return this.usersService.user({ id: id });
  }

  @ResolveField()
  async transactions(@Parent() user: User): Promise<Transaction[]> {
    const { id } = user;
    return this.transactionsService.transactions({
      where: { userId: id },
    });
  }
}
