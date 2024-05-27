import { ValidationArguments, ValidationOptions } from "class-validator";
import { UsersService } from "src/users/users.service";
export declare class UniqueEmailValidator {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(email: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsEmailUnique(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
