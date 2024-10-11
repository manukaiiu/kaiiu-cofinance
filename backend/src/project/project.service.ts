import { Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(data: Prisma.ProjectCreateInput) {
    return this.prismaService.project.create({ data });
  }

  async findAll(): Promise<Project[]> {
    return this.prismaService.project.findMany();
  }

  async findOne(id: number): Promise<Project>  {
    return this.prismaService.project.findUnique({ where: { id } });
  }

  async update(
    id: number,
    data: Prisma.ProjectUpdateInput,
  ): Promise<Project>  {
    return this.prismaService.project.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prismaService.project.delete({ where: { id } });
  }
}
