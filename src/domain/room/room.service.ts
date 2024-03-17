import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoomDto: CreateRoomDto) {
    console.log(createRoomDto);
    const room = await this.prisma.room.create({
      data: createRoomDto,
    });
    return room;
  }

  async findAll() {
    return await this.prisma.room.findMany({
      orderBy: {
        num: 'asc',
      },
      select: {
        id: true,
        num: true,
        title: true,
        capacity: true,
        price: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.room.findUnique({ where: { id } });
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    return await this.prisma.room.update({
      where: { id },
      data: updateRoomDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.room.delete({ where: { id } });
  }
}
