"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Iniciando seed de la base de datos...');
    const hashedAdminPassword = await bcrypt.hash('admin123', 10);
    const hashedUserPassword = await bcrypt.hash('user123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@inventory.com' },
        update: {},
        create: {
            nombre: 'Administrador',
            email: 'admin@inventory.com',
            password: hashedAdminPassword,
            role: client_1.Role.ADMIN,
        },
    });
    const user = await prisma.user.upsert({
        where: { email: 'user@inventory.com' },
        update: {},
        create: {
            nombre: 'Usuario Normal',
            email: 'user@inventory.com',
            password: hashedUserPassword,
            role: client_1.Role.USER,
        },
    });
    console.log('✅ Usuarios creados:', { admin: admin.email, user: user.email });
    const categories = await Promise.all([
        prisma.category.upsert({
            where: { id: 1 },
            update: {},
            create: {
                nombre: 'Electrónicos',
                descripcion: 'Productos electrónicos y tecnología',
            },
        }),
        prisma.category.upsert({
            where: { id: 2 },
            update: {},
            create: {
                nombre: 'Ropa',
                descripcion: 'Vestimenta y accesorios',
            },
        }),
        prisma.category.upsert({
            where: { id: 3 },
            update: {},
            create: {
                nombre: 'Hogar',
                descripcion: 'Artículos para el hogar',
            },
        }),
    ]);
    console.log('✅ Categorías creadas:', categories.map(c => c.nombre));
    const products = await Promise.all([
        prisma.product.upsert({
            where: { id: 1 },
            update: {},
            create: {
                nombre: 'iPhone 15',
                descripcion: 'Smartphone de última generación',
                precio: 999.99,
                stock: 50,
                categoriaId: 1,
            },
        }),
        prisma.product.upsert({
            where: { id: 2 },
            update: {},
            create: {
                nombre: 'Camiseta Básica',
                descripcion: 'Camiseta de algodón 100%',
                precio: 19.99,
                stock: 100,
                categoriaId: 2,
            },
        }),
        prisma.product.upsert({
            where: { id: 3 },
            update: {},
            create: {
                nombre: 'Lámpara de Mesa',
                descripcion: 'Lámpara LED moderna',
                precio: 45.50,
                stock: 25,
                categoriaId: 3,
            },
        }),
    ]);
    console.log('✅ Productos creados:', products.map(p => p.nombre));
    const stockMovements = await Promise.all([
        prisma.stockMovement.create({
            data: {
                productId: 1,
                tipo: 'ENTRADA',
                cantidad: 50,
                motivo: 'Stock inicial',
            },
        }),
        prisma.stockMovement.create({
            data: {
                productId: 2,
                tipo: 'ENTRADA',
                cantidad: 100,
                motivo: 'Stock inicial',
            },
        }),
        prisma.stockMovement.create({
            data: {
                productId: 3,
                tipo: 'ENTRADA',
                cantidad: 25,
                motivo: 'Stock inicial',
            },
        }),
    ]);
    console.log('✅ Movimientos de stock creados:', stockMovements.length);
    console.log('🎉 Seed completado exitosamente!');
    console.log('\n📋 Usuarios disponibles:');
    console.log('   Admin: admin@inventory.com / admin123');
    console.log('   User:  user@inventory.com / user123');
}
main()
    .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map