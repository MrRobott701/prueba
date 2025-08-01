import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
    findAll(): Promise<({
        _count: {
            products: number;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    })[]>;
    findOne(id: number): Promise<{
        products: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            precio: import("@prisma/client/runtime/library").Decimal;
            stock: number;
            categoriaId: number;
        }[];
        _count: {
            products: number;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
}
