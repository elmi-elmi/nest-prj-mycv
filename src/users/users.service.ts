import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    console.log('--->', user);
    return this.repo.save(user);
  }

  // findOne(id: number) {
  //   const a = this.repo.findOne({ where: { id } });
  //   console.log('user finde:', id, a);
  //   return a;
  // }
  //
  // find(email: string) {
  //   return this.repo.find({ where: { email } });
  // }
  //
  // async update(id: number, attrs: Partial<User>) {
  //   console.log('here 1', id, attrs);
  //   const user = await this.findOne(id);
  //   if (!user) {
  //     throw Error('User not found');
  //   }
  //   console.log('here 2', user);
  //   Object.assign(user, attrs);
  //   console.log('finish', user);
  //   return this.repo.save(user);
  // }
  //
  // async remove(id: number) {
  //   const user = await this.findOne(id);
  //   if (!user) {
  //     throw Error('User not found');
  //   }
  //   return this.repo.remove(user);
  // }
}
