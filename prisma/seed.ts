import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Crear usuarios por defecto
  const hashedAdminPassword = await bcrypt.hash('admin123', 10);
  const hashedUserPassword = await bcrypt.hash('user123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@inventory.com' },
    update: {},
    create: {
      nombre: 'Administrador',
      email: 'admin@inventory.com',
      password: hashedAdminPassword,
      role: Role.ADMIN,
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'user@inventory.com' },
    update: {},
    create: {
      nombre: 'Usuario Normal',
      email: 'user@inventory.com',
      password: hashedUserPassword,
      role: Role.USER,
    },
  });

  console.log('✅ Usuarios creados:', { admin: admin.email, user: user.email });

  // Crear categorías por defecto
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

  // Crear productos por defecto
  const products = await Promise.all([
    prisma.product.upsert({
      where: { id: 1 },
      update: {},
      create: {
        nombre: 'iPhone 15',
        descripcion: 'Smartphone de última generación',
        precio: 999.99,
        stock: 50,
        categoriaId: 1, // Electrónicos
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
        categoriaId: 2, // Ropa
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
        categoriaId: 3, // Hogar
      },
    }),
  ]);

  console.log('✅ Productos creados:', products.map(p => p.nombre));

  // Crear algunos movimientos de stock iniciales
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