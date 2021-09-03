import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Transaction } from './transaction';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  @IsEmail()
  email: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => [Transaction], { nullable: true })
  transactions?: [Transaction] | null;
}
