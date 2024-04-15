import { AxiosError } from 'axios';
import type { ErrorResponse } from '@/types/ErrorResponse';

export const formatDate = (date: Date): string =>
  date.toLocaleString(undefined, {
    hourCycle: 'h23',
    timeStyle: 'medium',
    dateStyle: 'medium',
  });

export const nonNullable = <T>(value: T | undefined | null): NonNullable<T> => {
  if (!value) {
    throw new TypeError('value is expected to be non nullable');
  }

  return value;
};

export const formatError = (error: unknown): string => {
  if (typeof error === 'string') {
    return error;
  }

  if (error instanceof AxiosError) {
    if (error.response) {
      return (error.response.data as ErrorResponse).message;
    }

    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return `Unexpected error: ${error}`;
};

export const promiseTimeout = (ms: number) => new Promise((r) => setTimeout(r, ms));
