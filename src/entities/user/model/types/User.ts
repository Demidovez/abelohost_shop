export type UserResponse = {
  email: string;
  firstName: string;
  lastName: string;
} | null;

export type User = NonNullable<UserResponse>;
