import { IsString, IsOptional, IsNumber, IsPositive, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone 15' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Smartphone de última generación' })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiProperty({ example: 999.99 })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  precio: number;

  @ApiProperty({ example: 50 })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  stock: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Type(() => Number)
  categoriaId: number;
}

export class UpdateProductDto {
  @ApiProperty({ example: 'iPhone 15' })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ example: 'Smartphone de última generación' })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiProperty({ example: 999.99 })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  precio?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  categoriaId?: number;
} 