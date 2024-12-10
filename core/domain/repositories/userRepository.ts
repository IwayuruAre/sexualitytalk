import { User } from "@/core/domain/entities/user";

export interface UserRepository {
    findById(userId: string): Promise<User | null>;
    update(userId: string, updateFields: Partial<User>): Promise<void>;
    create(user: User): Promise<void>;
}