import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/createUserDto.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<{
        id: number;
        email: string;
        full_name: string;
        password: string;
    }[]>;
    findOne(email: string): Promise<{
        id: number;
        email: string;
        full_name: string;
        password: string;
    }>;
    create(data: CreateUserDto): Promise<{
        id: number;
        email: string;
        full_name: string;
        password: string;
    }>;
    findByUserEmail(email: any): Promise<{
        id: number;
        email: string;
        full_name: string;
        password: string;
    }>;
}
