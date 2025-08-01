export declare class CreateProductDto {
    nombre: string;
    descripcion?: string;
    precio: number;
    stock: number;
    categoriaId: number;
}
export declare class UpdateProductDto {
    nombre?: string;
    descripcion?: string;
    precio?: number;
    categoriaId?: number;
}
