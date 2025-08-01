import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
      include: {
        category: true,
      },
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      include: {
        category: true,
      },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    return product;
  }

  async findByCategory(categoryId: number) {
    return this.prisma.product.findMany({
      where: { categoriaId: categoryId },
      include: {
        category: true,
      },
    });
  }

  async search(query: string) {
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            nombre: {
              contains: query,
            },
          },
          {
            descripcion: {
              contains: query,
            },
          },
        ],
      },
      include: {
        category: true,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
      include: {
        category: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    
    return this.prisma.product.delete({
      where: { id },
      include: {
        category: true,
      },
    });
  }
} 