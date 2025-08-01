import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';

let app: any;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    // Configurar validaciones globales
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }));

    // Configurar CORS
    app.enableCors();

    // Configurar Swagger con rutas personalizadas
    const config = new DocumentBuilder()
      .setTitle('API de Gestión de Inventario')
      .setDescription('API RESTful para administrar inventario, usuarios, productos y categorías')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    
    const document = SwaggerModule.createDocument(app, config);
    
    // Configurar Swagger con opciones personalizadas para Vercel
    SwaggerModule.setup('api', app, document, {
      customCss: '.swagger-ui .topbar { display: none }',
      customSiteTitle: 'API de Inventario',
      swaggerOptions: {
        docExpansion: 'list',
        filter: true,
        showRequestHeaders: true,
      },
      customJs: [
        'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.9.0/swagger-ui-bundle.js',
        'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js'
      ],
      customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.9.0/swagger-ui.css',
    });

    await app.init();
  }
  
  return app;
}

// Exportar para Vercel
export default async function handler(req: any, res: any) {
  const app = await bootstrap();
  const expressInstance = app.getHttpAdapter().getInstance();
  
  return expressInstance(req, res);
} 