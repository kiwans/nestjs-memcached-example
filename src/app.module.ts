import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as memcachedStore from 'cache-manager-memcached-store';
import {APP_INTERCEPTOR} from "@nestjs/core";

@Module({
  imports: [
    CacheModule.register({
      store: memcachedStore,
      ttl: 60,
      options: {
        hosts: ['127.0.0.1:11211']
      }
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    AppService],
})
export class AppModule {}
