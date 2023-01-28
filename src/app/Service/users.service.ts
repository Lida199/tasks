import { Data } from '../Model/data.interface';

export class UsersService {
  constructor() {}
  getUsers() {
    const users: Data[] = [
      {
        firstName: 'Lida',
        lastName: 'Shubitidze',
        birthDate: new Date('8, 10, 1998'),
        about: 'about her',
        status: 'Active',
      },
      {
        firstName: 'Lida2',
        lastName: 'Shubitidze2',
        birthDate: new Date('5, 6, 1971'),
        about: 'about her2',
        status: 'Deleted',
      },
      {
        firstName: 'Lida3',
        lastName: 'Shubitidze3',
        birthDate: new Date('1, 13, 2000'),
        about: 'about her3',
        status: 'Inactive',
      },
    ];
    return users;
  }
}
