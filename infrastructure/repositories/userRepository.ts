import { User } from "@/core/domain/entities/user";
import { UserRepository as IUserRepository} from "@/core/domain/repositories/userRepository";
import { FirestoreUserReposiroty } from "@/infrastructure/db/firestoreUserRepository";

export class UserRepository implements IUserRepository {
    private firestoreUserReposiroty: FirestoreUserReposiroty;

    constructor() {
        this.firestoreUserReposiroty = new FirestoreUserReposiroty();
    }

    public findById(userId: string): Promise<User | null> {
        return this.firestoreUserReposiroty.findUserById(userId);
    }

    public save(user: User): Promise<void> {
        return this.firestoreUserReposiroty.save(user);
    }

}