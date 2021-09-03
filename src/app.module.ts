import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersResolver } from './resolvers/users.resolver';
import { TransactionsResolver } from './resolvers/transactions.resolver';
import { UserService } from './services/user.service';
import { TransactionService } from './services/transactions.service';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    PrismaService,
    AppService,
    UsersResolver,
    TransactionsResolver,
    UserService,
    TransactionService,
  ],
})
export class AppModule {}
