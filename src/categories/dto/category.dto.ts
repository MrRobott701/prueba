import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Electrónicos' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Productos electrónicos y tecnología' })
  @IsOptional()
  @IsString()
  descripcion?: string;
}

export class UpdateCategoryDto {
  @ApiProperty({ example: 'Electrónicos' })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ example: 'Productos electrónicos y tecnología' })
  @IsOptional()
  @IsString()
  descripcion?: string;
} 