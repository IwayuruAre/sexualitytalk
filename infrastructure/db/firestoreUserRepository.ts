import { db } from "@/firebase";
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, collection } from "firebase/firestore";
import { User } from "@/core/domain/entities/user";
import { UserConverter } from "@/infrastructure/repositories/userConverter"

export class FirestoreUserReposiroty {

    public async findById(userId: string): Promise<User | null> {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return UserConverter.fromFirestore(userSnap);
        } else {
            return null;
        }
    }

    public async create(user: User): Promise<void> {
        const userRef = doc(db, "users", user.id);
        try {
            await setDoc(userRef, UserConverter.toFirestore(user))
        } catch(err) {
            console.error("Error create user:", err);
            throw err;
        }
    }

    public async update(userId: string, updateFields: Partial<User>): Promise<void> {
        const userRef = doc(db, "users", userId);
        try {
            await updateDoc(userRef, {
                ...updateFields,
                updated_at: serverTimestamp()
            });
        } catch (err) {
            console.error("Error save user:", err);
            throw err;
        }
    }

}