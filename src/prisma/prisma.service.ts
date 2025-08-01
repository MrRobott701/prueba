import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
      // Configuración optimizada para Vercel y bases de datos con límite de conexiones
      __internal: {
        engine: {
          connectionLimit: 1,
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      console.error('Error connecting to database:', error);
      // En Vercel, no fallar si no se puede conectar inmediatamente
      if (process.env.NODE_ENV === 'production') {
        console.log('Continuing without database connection for now...');
      } else {
        throw error;
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
} 