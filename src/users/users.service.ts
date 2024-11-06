import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {

    private users: User[] = [
        {
          id: 1,
          name: 'john',
          email: 'john@email.com',
          role: 'ADM',
          password: '1234b',
          isActive: true
        },
        {
          id: 2,
          name: 'maria',
          email: 'maria@email.com',
          password: '123a',
          role: 'TEC',
          isActive: true
        }
      ];
    
      async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
      }
    
}
