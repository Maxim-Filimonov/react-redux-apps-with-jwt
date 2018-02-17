import { generateToken } from './token_generator';


describe('#generateToken', () => {
  it('returns a token', () => {
    const token = generateToken({
      name: 'Cordelia',
      username: 'deliacodes',
      admin: true,
      image: 'N/A',
      _id: 123,
    });
    expect(token).toBeDefined();
  });
});
