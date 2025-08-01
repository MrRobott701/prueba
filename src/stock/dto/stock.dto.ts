import { IsNumber, IsPositive, IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { MovementType } from '@prisma/client';

export class AddStockDto {
  @ApiProperty({ example: 10 })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  cantidad: number;

  @ApiProperty({ example: 'Compra de proveedor' })
  @IsOptional()
  @IsString()
  motivo?: string;
}

export class RemoveStockDto {
  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  cantidad: number;

  @ApiProperty({ example: 'Venta a cliente' })
  @IsOptional()
  @IsString()
  motivo?: string;
}

export class StockMovementDto {
  @ApiProperty({ enum: MovementType, example: MovementType.ENTRADA })
  @IsEnum(MovementType)
  tipo: MovementType;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  cantidad: number;

  @ApiProperty({ example: 'Compra de proveedor' })
  @IsOptional()
  @IsString()
  motivo?: string;
} 