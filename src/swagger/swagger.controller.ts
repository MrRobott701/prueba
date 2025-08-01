import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('swagger')
export class SwaggerController {
  @Get('swagger-ui.css')
  serveSwaggerCSS(@Res() res: Response) {
    const cssPath = path.join(process.cwd(), 'node_modules', 'swagger-ui-dist', 'swagger-ui.css');
    if (fs.existsSync(cssPath)) {
      res.setHeader('Content-Type', 'text/css');
      res.sendFile(cssPath);
    } else {
      res.status(404).send('CSS not found');
    }
  }

  @Get('swagger-ui-bundle.js')
  serveSwaggerBundle(@Res() res: Response) {
    const jsPath = path.join(process.cwd(), 'node_modules', 'swagger-ui-dist', 'swagger-ui-bundle.js');
    if (fs.existsSync(jsPath)) {
      res.setHeader('Content-Type', 'application/javascript');
      res.sendFile(jsPath);
    } else {
      res.status(404).send('Bundle not found');
    }
  }

  @Get('swagger-ui-standalone-preset.js')
  serveSwaggerPreset(@Res() res: Response) {
    const jsPath = path.join(process.cwd(), 'node_modules', 'swagger-ui-dist', 'swagger-ui-standalone-preset.js');
    if (fs.existsSync(jsPath)) {
      res.setHeader('Content-Type', 'application/javascript');
      res.sendFile(jsPath);
    } else {
      res.status(404).send('Preset not found');
    }
  }

  @Get('favicon-32x32.png')
  serveFavicon32(@Res() res: Response) {
    const iconPath = path.join(process.cwd(), 'node_modules', 'swagger-ui-dist', 'favicon-32x32.png');
    if (fs.existsSync(iconPath)) {
      res.setHeader('Content-Type', 'image/png');
      res.sendFile(iconPath);
    } else {
      res.status(404).send('Icon not found');
    }
  }

  @Get('favicon-16x16.png')
  serveFavicon16(@Res() res: Response) {
    const iconPath = path.join(process.cwd(), 'node_modules', 'swagger-ui-dist', 'favicon-16x16.png');
    if (fs.existsSync(iconPath)) {
      res.setHeader('Content-Type', 'image/png');
      res.sendFile(iconPath);
    } else {
      res.status(404).send('Icon not found');
    }
  }
} 