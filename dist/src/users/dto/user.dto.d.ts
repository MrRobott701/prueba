import { Role } from '@prisma/client';
export declare class CreateUserDto {
    nombre: string;
    email: string;
    password: string;
    role?: Role;
}
export declare class UpdateUserDto {
    nombre?: string;
    email?: string;
    password?: string;
    role?: Role;
}
