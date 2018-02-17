import { hashSync, compareSync } from 'bcrypt';

export const hashPassword = pwd => hashSync(pwd, 10);
export const comparePassword = (pwd, hash) => compareSync(pwd, hash);
