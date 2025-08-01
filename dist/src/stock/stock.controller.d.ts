import { StockService } from './stock.service';
import { AddStockDto, RemoveStockDto } from './dto/stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    addStock(productId: string, addStockDto: AddStockDto): Promise<{
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
    removeStock(productId: string, removeStockDto: RemoveStockDto): Promise<{
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
    getStockHistory(productId: string): Promise<{
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
