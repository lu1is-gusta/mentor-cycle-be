import { IsBoolean, IsUUID } from 'class-validator';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateNotificationInput } from './create-notification.input';

@InputType()
export class UpdateNotificationInput extends PartialType(
  CreateNotificationInput,
) {
  @IsUUID()
  @Field(() => String)
  id: string;

  @IsBoolean()
  @Field(() => Boolean, { defaultValue: false, nullable: true })
  read?: boolean;
}
