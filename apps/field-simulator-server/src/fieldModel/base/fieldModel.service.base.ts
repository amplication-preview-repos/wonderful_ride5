/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FieldModel as PrismaFieldModel } from "@prisma/client";

export class FieldModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FieldModelCountArgs, "select">
  ): Promise<number> {
    return this.prisma.fieldModel.count(args);
  }

  async fieldModels<T extends Prisma.FieldModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FieldModelFindManyArgs>
  ): Promise<PrismaFieldModel[]> {
    return this.prisma.fieldModel.findMany<Prisma.FieldModelFindManyArgs>(args);
  }
  async fieldModel<T extends Prisma.FieldModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FieldModelFindUniqueArgs>
  ): Promise<PrismaFieldModel | null> {
    return this.prisma.fieldModel.findUnique(args);
  }
  async createFieldModel<T extends Prisma.FieldModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FieldModelCreateArgs>
  ): Promise<PrismaFieldModel> {
    return this.prisma.fieldModel.create<T>(args);
  }
  async updateFieldModel<T extends Prisma.FieldModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FieldModelUpdateArgs>
  ): Promise<PrismaFieldModel> {
    return this.prisma.fieldModel.update<T>(args);
  }
  async deleteFieldModel<T extends Prisma.FieldModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FieldModelDeleteArgs>
  ): Promise<PrismaFieldModel> {
    return this.prisma.fieldModel.delete(args);
  }
}
