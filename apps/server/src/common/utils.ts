import { ClassConstructor, plainToInstance } from 'class-transformer';
import { isBooleanString } from 'class-validator';

export const instance = <T, V>(cls: ClassConstructor<T>, plain: V) =>
  plainToInstance(cls, plain, { excludeExtraneousValues: true });

export const stringToBoolean = (value: unknown) => {
  if (isBooleanString(value)) {
    return /^true|1$/i.test(value as string);
  }
  return false;
};

export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0;
