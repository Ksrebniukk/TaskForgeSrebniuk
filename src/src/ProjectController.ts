import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectService } from './ProjectService';
import { CreateProjectDto } from './CreateProjectDto';
import { ProjectByIdPipe } from './ProjectByIdPipe';
import { UpdateProjectDto } from './UpdateProjectDto';

@Controller('/projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() body: CreateProjectDto) {
    return this.projectService.create(body);
  }

  @Get('/:projectId')
  getById(@Param('projectId', ProjectByIdPipe) projectId: string) {
    return this.projectService.getById(projectId);
  }

  @Get()
  getAll() {
    return this.projectService.getAll();
  }

  @Delete('/:projectId')
  delete(@Param('projectId', ProjectByIdPipe) projectId: string) {
    return this.projectService.delete(projectId);
  }

  @Patch('/:projectId')
  update(
    @Param('projectId', ProjectByIdPipe) projectId: string,
    @Body() body: UpdateProjectDto,
  ) {
    return this.projectService.update(projectId, body);
  }
}
