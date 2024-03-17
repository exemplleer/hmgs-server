import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @Length(1)
  num: string;

  @IsString()
  @Length(1)
  title: string;

  @IsNumber()
  @Min(0)
  capacity: number;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  description?: string;
}
