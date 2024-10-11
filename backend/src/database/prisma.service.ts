import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private connected = false;

  public isConnected(): boolean {
    return this.connected;
  }

  public async onModuleInit(): Promise<void> {
    let i = 0;
    while (!this.connected) {
      try {
        await this.$connect();
        this.connected = true;
      } catch(e) {
        if(i > 10) {
          throw e;
        }
        // eslint-disable-next-line no-promise-executor-return
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      i++;
    }
  }

  public async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}

export type TPrismaTransactionClient = Omit<PrismaClient, `$connect` | `$disconnect` | `$on` | `$transaction` | `$use`>;
