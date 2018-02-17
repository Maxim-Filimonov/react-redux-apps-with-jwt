import { hashPassword, comparePassword } from './auth';

describe('#hashPassword', () => {
  it('does not return the password', () => {
    const passwordHash = hashPassword('banana');

    expect(passwordHash).not.toContain('banana');
  });
  it('creates hash for that password', () => {
    const passwordHash = hashPassword('banana');

    expect(comparePassword('banana', passwordHash)).toEqual(true);
  });
  it('the hash is valid only for the password passed', () => {
    const passwordHash = hashPassword('banana');

    expect(comparePassword('jungle', passwordHash)).toBeFalsy();
  });
});
