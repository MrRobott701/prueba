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
exports.StockMovementDto = exports.RemoveStockDto = exports.AddStockDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const client_1 = require("@prisma/client");
class AddStockDto {
    cantidad;
    motivo;
}
exports.AddStockDto = AddStockDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AddStockDto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Compra de proveedor' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddStockDto.prototype, "motivo", void 0);
class RemoveStockDto {
    cantidad;
    motivo;
}
exports.RemoveStockDto = RemoveStockDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], RemoveStockDto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Venta a cliente' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RemoveStockDto.prototype, "motivo", void 0);
class StockMovementDto {
    tipo;
    cantidad;
    motivo;
}
exports.StockMovementDto = StockMovementDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.MovementType, example: client_1.MovementType.ENTRADA }),
    (0, class_validator_1.IsEnum)(client_1.MovementType),
    __metadata("design:type", String)
], StockMovementDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StockMovementDto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Compra de proveedor' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StockMovementDto.prototype, "motivo", void 0);
//# sourceMappingURL=stock.dto.js.map