import { ROLES } from './roles';

export interface Users {
  role: ROLES;
  name: string;
  userName: string;
  password: string;
}

export const data: Users[] = [
  {
    role: ROLES.PATIENT,
    name: 'Ashutosh Kumar',
    userName: 'ashu@gmail.com',
    password: '123',
  },
];

export const checkLogin = (userName: string, password: string) => {
  const user = data.find(
    (user) => user.userName === userName && user.password === password
  );
  if (user) return user;
  return new Error('User does not exist');
};
