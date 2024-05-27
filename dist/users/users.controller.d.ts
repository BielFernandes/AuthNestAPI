import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<{
        id: number;
        email: string;
        full_name: string;
        password: string;
    }[]>;
    findOne(user_email: string): Promise<{
        id: number;
        email: string;
        full_name: string;
        password: string;
    }>;
    create(data: CreateUserDto): Promise<"User created successfully." | "Error occured.">;
}
