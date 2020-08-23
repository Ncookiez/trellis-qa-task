import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  // Base Test (Functionality of controller + service is tested in app.service.spec.ts):
  it('should run', () => {
    expect(true).toEqual(true);
  });

});