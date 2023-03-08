import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cats?filter[breedId]={id} (GET)', () => {
    const ownerId = 123;
    return request(app.getHttpServer())
      .get(`/cats?filter[ownerId]=${ownerId}`)
      .expect(200)
      .expect(`The ownerId is ${ownerId}`);
  });
});
