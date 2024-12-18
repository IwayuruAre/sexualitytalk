import { db } from "@/firebase";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { User } from "@/core/domain/entities/user";
import { UserConverter } from "@/infrastructure/repositories/userConverter"

export class FirestoreUserReposiroty {

    public async findUserById(userId: string): Promise<User | null> {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return UserConverter.fromFirestore(userSnap);
        } else {
            return null;
        }
    }

    public async save(user: User): Promise<void> {
        const userRef = doc(db, "users", user.id);
        try {
            await updateDoc(userRef, {
                chat_rooms: user.chatRooms,
                lgbt: user.lgbt,
                photos: user.photos,
                profile: user.profile,
                updated_at: serverTimestamp()
            });
        } catch (err) {
            console.error("Error save user:", err);
            throw err;
        }
    }

}