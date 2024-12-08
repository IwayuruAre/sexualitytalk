import { User } from "@/core/domain/entities/user";

export interface UserRepository {
    findById(userId: string): Promise<User | null>;
    save(user: User): Promise<void>;
    create(user: User): Promise<void>;
}