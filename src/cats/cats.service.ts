import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(ownerId?: string) {
    return `The ownerId is ${ownerId}`;
  }
}
