import { FieldId } from '@common/decorators';
//import { User } from '@modules/user/entities/user.entity';
import { ObjectType, Field, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Testimony {
  @FieldId()
  id: string;
  @Field(() => String)
  mentorId: string;
  @Field(() => String)
  learnerId: string;
  @Field(() => String)
  text: string;
}
