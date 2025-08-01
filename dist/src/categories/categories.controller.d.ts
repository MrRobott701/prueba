import { CategoriesService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
}
