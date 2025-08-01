import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
        category: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        precio: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        categoriaId: number;
    }>;
    findAll(): Promise<({
        category: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        precio: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        categoriaId: number;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        precio: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        categoriaId: number;
    }>;
    findByCategory(categoryId: number): Promise<({
        category: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        precio: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        categoriaId: number;
    })[]>;
    search(query: string): Promise<({
        category: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        precio: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        categoriaId: number;
    })[]>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        category: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        precio: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        categoriaId: number;
    }>;
    remove(id: number): Promise<{
        category: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        precio: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        categoriaId: number;
    }>;
}
