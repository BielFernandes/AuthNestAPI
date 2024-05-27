import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(req: any): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        title: string;
        content: string;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(req: any): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        content: string;
        userId: number;
    }[]>;
}
