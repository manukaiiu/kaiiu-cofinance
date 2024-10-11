import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Prisma } from '@prisma/client';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() data: Prisma.ProjectCreateInput) {
    return this.projectService.create(data);
  }

  @Get()
  async findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.projectService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Prisma.ProjectUpdateInput) {
    return this.projectService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.projectService.delete(Number(id));
  }
}
