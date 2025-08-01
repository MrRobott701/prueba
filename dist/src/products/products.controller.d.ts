import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
    findByCategory(categoryId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
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
    remove(id: string): Promise<{
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
