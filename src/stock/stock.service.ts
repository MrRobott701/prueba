import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddStockDto, RemoveStockDto } from './dto/stock.dto';
import { MovementType } from '@prisma/client';

@Injectable()
export class StockService {
  constructor(private prisma: PrismaService) {}

  async addStock(productId: number, addStockDto: AddStockDto) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    const newStock = product.stock + addStockDto.cantidad;

    const [updatedProduct, stockMovement] = await this.prisma.$transaction([
      this.prisma.product.update({
        where: { id: productId },
        data: { stock: newStock },
        include: { category: true },
      }),
      this.prisma.stockMovement.create({
        data: {
          productId,
          tipo: MovementType.ENTRADA,
          cantidad: addStockDto.cantidad,
          motivo: addStockDto.motivo,
        },
      }),
    ]);

    return {
      product: updatedProduct,
      movement: stockMovement,
    };
  }

  async removeStock(productId: number, removeStockDto: RemoveStockDto) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    if (product.stock < removeStockDto.cantidad) {
      throw new BadRequestException('Stock insuficiente');
    }

    const newStock = product.stock - removeStockDto.cantidad;

    const [updatedProduct, stockMovement] = await this.prisma.$transaction([
      this.prisma.product.update({
        where: { id: productId },
        data: { stock: newStock },
        include: { category: true },
      }),
      this.prisma.stockMovement.create({
        data: {
          productId,
          tipo: MovementType.SALIDA,
          cantidad: removeStockDto.cantidad,
          motivo: removeStockDto.motivo,
        },
      }),
    ]);

    return {
      product: updatedProduct,
      movement: stockMovement,
    };
  }

  async getStockHistory(productId: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    const movements = await this.prisma.stockMovement.findMany({
      where: { productId },
      orderBy: { createdAt: 'desc' },
      include: {
        product: {
          include: {
            category: true,
          },
        },
      },
    });

    return {
      product,
      movements,
    };
  }

  async getAllStockHistory() {
    return this.prisma.stockMovement.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        product: {
          include: {
            category: true,
          },
        },
      },
    });
  }
} 