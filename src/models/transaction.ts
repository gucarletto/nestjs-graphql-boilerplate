import 'reflect-metadata';
import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { User } from './user';

@ObjectType()
export class Transaction {
  @Field((type) => Int)
  id: number;

  @Field((type) => Float)
  value: number;

  @Field((type) => User, { nullable: true })
  user?: User | null;
}
