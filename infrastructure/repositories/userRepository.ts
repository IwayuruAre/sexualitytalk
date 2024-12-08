import { User } from "@/core/domain/entities/user";
import { UserRepository as IUserRepository} from "@/core/domain/repositories/userRepository";
import { FirestoreUserReposiroty } from "@/infrastructure/db/firestoreUserRepository";

export class UserRepository implements IUserRepository {
    private firestoreUserReposiroty: FirestoreUserReposiroty;

    constructor() {
        this.firestoreUserReposiroty = new FirestoreUserReposiroty();
    }

    public create(user: User): Promise<void> {
        return this.firestoreUserReposiroty.create(user);
    }

    public findById(userId: string): Promise<User | null> {
        return this.firestoreUserReposiroty.findById(userId);
    }

    public update(userId: string, updateFields: Partial<Record<keyof User, unknown>>): Promise<void> {
        return this.firestoreUserReposiroty.update(userId, updateFields);
    }

}