import { IsOptional, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterProductsDto {
  @ApiProperty({ type: Number, minimum: 1, required: false })
  @IsOptional()
  @IsPositive()
  limit: number;

  @ApiProperty({ type: Number, minimum: 1, required: false })
  @IsOptional()
  @IsPositive()
  page: number;
}
