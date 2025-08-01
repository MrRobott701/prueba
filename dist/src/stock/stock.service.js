"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let StockService = class StockService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addStock(productId, addStockDto) {
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException('Producto no encontrado');
        }
        const newStock = product.stock + addStockDto.cantidad;
        const [updatedProduct, stockMovement] = await this.prisma.$transaction([
            this.prisma.product.update({
                where: { id: productId },
                data: { stock: newStock },
                include: { category: true },
            }),
            this.prisma.stockMovement.create({
                data: {
                    productId,
                    tipo: client_1.MovementType.ENTRADA,
                    cantidad: addStockDto.cantidad,
                    motivo: addStockDto.motivo,
                },
            }),
        ]);
        return {
            product: updatedProduct,
            movement: stockMovement,
        };
    }
    async removeStock(productId, removeStockDto) {
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException('Producto no encontrado');
        }
        if (product.stock < removeStockDto.cantidad) {
            throw new common_1.BadRequestException('Stock insuficiente');
        }
        const newStock = product.stock - removeStockDto.cantidad;
        const [updatedProduct, stockMovement] = await this.prisma.$transaction([
            this.prisma.product.update({
                where: { id: productId },
                data: { stock: newStock },
                include: { category: true },
            }),
            this.prisma.stockMovement.create({
                data: {
                    productId,
                    tipo: client_1.MovementType.SALIDA,
                    cantidad: removeStockDto.cantidad,
                    motivo: removeStockDto.motivo,
                },
            }),
        ]);
        return {
            product: updatedProduct,
            movement: stockMovement,
        };
    }
    async getStockHistory(productId) {
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException('Producto no encontrado');
        }
        const movements = await this.prisma.stockMovement.findMany({
            where: { productId },
            orderBy: { createdAt: 'desc' },
            include: {
                product: {
                    include: {
                        category: true,
                    },
                },
            },
        });
        return {
            product,
            movements,
        };
    }
    async getAllStockHistory() {
        return this.prisma.stockMovement.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                product: {
                    include: {
                        category: true,
                    },
                },
            },
        });
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StockService);
//# sourceMappingURL=stock.service.js.map