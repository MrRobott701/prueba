import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { StockService } from './stock.service';
import { AddStockDto, RemoveStockDto } from './dto/stock.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('stock')
@Controller('stock')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post(':productId/add')
  @ApiOperation({ summary: 'Agregar stock a un producto' })
  @ApiResponse({ status: 201, description: 'Stock agregado exitosamente' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  addStock(@Param('productId') productId: string, @Body() addStockDto: AddStockDto) {
    return this.stockService.addStock(+productId, addStockDto);
  }

  @Post(':productId/remove')
  @ApiOperation({ summary: 'Remover stock de un producto' })
  @ApiResponse({ status: 201, description: 'Stock removido exitosamente' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  @ApiResponse({ status: 400, description: 'Stock insuficiente' })
  removeStock(@Param('productId') productId: string, @Body() removeStockDto: RemoveStockDto) {
    return this.stockService.removeStock(+productId, removeStockDto);
  }

  @Get(':productId/history')
  @ApiOperation({ summary: 'Obtener historial de movimientos de stock por producto' })
  @ApiResponse({ status: 200, description: 'Historial de movimientos' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  getStockHistory(@Param('productId') productId: string) {
    return this.stockService.getStockHistory(+productId);
  }

  @Get('history/all')
  @ApiOperation({ summary: 'Obtener historial completo de movimientos de stock' })
  @ApiResponse({ status: 200, description: 'Historial completo de movimientos' })
  getAllStockHistory() {
    return this.stockService.getAllStockHistory();
  }
} 