import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service.js';

@Resolver()
export class HealthResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => String)
  async health(): Promise<string> {
    await this.prisma.$queryRaw`SELECT 1`;
    return 'ok';
  }
}
