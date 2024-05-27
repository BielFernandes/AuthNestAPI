import { PrismaService } from 'src/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: any, body: any): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        title: string;
        content: string;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(userId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        content: string;
        userId: number;
    }[]>;
}
