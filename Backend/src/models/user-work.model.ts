import mongoose, { Schema, Types } from 'mongoose';

interface IUserWork {
  userId: Types.ObjectId;
  work: Buffer,
}

const UserWorkSchema = new Schema<IUserWork>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  work: {
      type: Buffer,
      required: true
  }
});

UserWorkSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});

const UserWork = mongoose.model<IUserWork>('UserGrade', UserWorkSchema);
type UserWorkDoc = ReturnType<(typeof UserWork)['hydrate']>;

export { UserWork, UserWorkDoc, IUserWork };