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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const stock_service_1 = require("./stock.service");
const stock_dto_1 = require("./dto/stock.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let StockController = class StockController {
    stockService;
    constructor(stockService) {
        this.stockService = stockService;
    }
    addStock(productId, addStockDto) {
        return this.stockService.addStock(+productId, addStockDto);
    }
    removeStock(productId, removeStockDto) {
        return this.stockService.removeStock(+productId, removeStockDto);
    }
    getStockHistory(productId) {
        return this.stockService.getStockHistory(+productId);
    }
    getAllStockHistory() {
        return this.stockService.getAllStockHistory();
    }
};
exports.StockController = StockController;
__decorate([
    (0, common_1.Post)(':productId/add'),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar stock a un producto' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Stock agregado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, stock_dto_1.AddStockDto]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "addStock", null);
__decorate([
    (0, common_1.Post)(':productId/remove'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover stock de un producto' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Stock removido exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Stock insuficiente' }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, stock_dto_1.RemoveStockDto]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "removeStock", null);
__decorate([
    (0, common_1.Get)(':productId/history'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener historial de movimientos de stock por producto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Historial de movimientos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "getStockHistory", null);
__decorate([
    (0, common_1.Get)('history/all'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener historial completo de movimientos de stock' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Historial completo de movimientos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockController.prototype, "getAllStockHistory", null);
exports.StockController = StockController = __decorate([
    (0, swagger_1.ApiTags)('stock'),
    (0, common_1.Controller)('stock'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
//# sourceMappingURL=stock.controller.js.map