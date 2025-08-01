import { PrismaService } from '../prisma/prisma.service';
import { AddStockDto, RemoveStockDto } from './dto/stock.dto';
export declare class StockService {
    private prisma;
    constructor(prisma: PrismaService);
    addStock(productId: number, addStockDto: AddStockDto): Promise<{
        product: {
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
        };
        movement: {
            id: number;
            createdAt: Date;
            productId: number;
            tipo: import(".prisma/client").$Enums.MovementType;
            cantidad: number;
            motivo: string | null;
        };
    }>;
    removeStock(productId: number, removeStockDto: RemoveStockDto): Promise<{
        product: {
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
        };
        movement: {
            id: number;
            createdAt: Date;
            productId: number;
            tipo: import(".prisma/client").$Enums.MovementType;
            cantidad: number;
            motivo: string | null;
        };
    }>;
    getStockHistory(productId: number): Promise<{
        product: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string | null;
            precio: import("@prisma/client/runtime/library").Decimal;
            stock: number;
            categoriaId: number;
        };
        movements: ({
            product: {
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
            };
        } & {
            id: number;
            createdAt: Date;
            productId: number;
            tipo: import(".prisma/client").$Enums.MovementType;
            cantidad: number;
            motivo: string | null;
        })[];
    }>;
    getAllStockHistory(): Promise<({
        product: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        productId: number;
        tipo: import(".prisma/client").$Enums.MovementType;
        cantidad: number;
        motivo: string | null;
    })[]>;
}
