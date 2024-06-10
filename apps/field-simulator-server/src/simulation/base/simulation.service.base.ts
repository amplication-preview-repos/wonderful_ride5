/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Simulation as PrismaSimulation } from "@prisma/client";

export class SimulationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SimulationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.simulation.count(args);
  }

  async simulations<T extends Prisma.SimulationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SimulationFindManyArgs>
  ): Promise<PrismaSimulation[]> {
    return this.prisma.simulation.findMany<Prisma.SimulationFindManyArgs>(args);
  }
  async simulation<T extends Prisma.SimulationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SimulationFindUniqueArgs>
  ): Promise<PrismaSimulation | null> {
    return this.prisma.simulation.findUnique(args);
  }
  async createSimulation<T extends Prisma.SimulationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SimulationCreateArgs>
  ): Promise<PrismaSimulation> {
    return this.prisma.simulation.create<T>(args);
  }
  async updateSimulation<T extends Prisma.SimulationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SimulationUpdateArgs>
  ): Promise<PrismaSimulation> {
    return this.prisma.simulation.update<T>(args);
  }
  async deleteSimulation<T extends Prisma.SimulationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SimulationDeleteArgs>
  ): Promise<PrismaSimulation> {
    return this.prisma.simulation.delete(args);
  }
}
