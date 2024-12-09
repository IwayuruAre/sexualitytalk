import { QueryDocumentSnapshot, DocumentData, Timestamp, serverTimestamp } from 'firebase/firestore';
import { User } from "@/core/domain/entities/user";

export class UserConverter {

    static fromFirestore(doc: QueryDocumentSnapshot): User {
        const data = doc.data();
        return new User(
            doc.id,
            data?.name,
            data?.birth.toDate(),
            data?.sex,
            data?.lgbt,
            data?.prefecture,
            {
                chatRooms: data?.chat_rooms,
                photos: data?.photos,
                profile: data?.profile,
                createdAt: data?.created_at ? data.created_at.toDate() : null,
                updatedAt: data?.updated_at ? data.updated_at.toDate() : null
            }
        );
    }

    static toFirestore(user: User): DocumentData {
        return {
            name: user.name,
            birth: user.birth,
            sex: user.sex,
            lgbt: user.lgbt,
            prefecture: user.prefecture,
            profile: user.profile,
            photos: user.photos,
            chat_rooms: user.chatRooms,
            created_at: user.createdAt ? Timestamp.fromDate(user.createdAt) : serverTimestamp(),
            updated_at: user.updatedAt ? Timestamp.fromDate(user.updatedAt) : serverTimestamp()
        };
    }
}