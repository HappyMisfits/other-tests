import { IsNotEmpty, IsArray } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  customerName: string;

  @IsArray()
  @IsNotEmpty({ each: true }) // Chaque élément de la liste doit être non vide
  items: string[];
}