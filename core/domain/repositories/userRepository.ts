import { User } from "@/core/domain/entities/user";

export interface UserRepository {
    findById(userId: string): Promise<User | null>;
    update(userId: string, updateFields: Partial<Record<keyof User, unknown>>): Promise<void>;
    create(user: User): Promise<void>;
}