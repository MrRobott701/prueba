import { MovementType } from '@prisma/client';
export declare class AddStockDto {
    cantidad: number;
    motivo?: string;
}
export declare class RemoveStockDto {
    cantidad: number;
    motivo?: string;
}
export declare class StockMovementDto {
    tipo: MovementType;
    cantidad: number;
    motivo?: string;
}
