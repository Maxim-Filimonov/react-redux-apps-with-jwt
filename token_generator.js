import { config } from 'dotenv';
import { sign } from 'jsonwebtoken';

config();

export const generateToken = (user) => {
  const jwtUser = {
    name: user.name,
    username: user.username,
    admin: user.admin,
    _id: user._id.toString(),
    image: user.image,
  };
  return sign(jwtUser, process.env.SECRET || 'secret', {
    expiresIn: 60,
  });
};
