import { Prefecture } from "./prefecture";
import { Sex } from "./sex";
import { UserOptions } from "./userOptions";

export class User {
    public readonly chatRooms: string[];
    public readonly photos: string[];
    public readonly profile: string;
    public readonly createdAt: Date | null;
    public readonly updatedAt: Date | null;

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly birth: Date,
        public readonly sex: Sex,
        public readonly lgbt: string[],
        public readonly prefecture: Prefecture,
        options: UserOptions = {}
    ) {
        this.chatRooms = options?.chatRooms || [];
        this.photos = options?.photos || [];
        this.profile = options?.profile || "";
        this.createdAt = options?.createdAt || null;
        this.updatedAt = options?.updatedAt || null;
        this.validate();
    }

    get age(): number {
        const today = new Date();
        let age = today.getFullYear() - this.birth.getFullYear();
        const birthMonth = this.birth.getMonth();
        const birthDay = this.birth.getDate();

        if (
            today.getMonth() < birthMonth ||
            (today.getMonth() === birthMonth && today.getDate() < birthDay)
        ) {
            age--;
        }
        return age;
    }

    private validate(): void {
        if (this.id === "") {
            throw new Error("id is required");
        }
        if (this.name === "") {
            throw new Error("name is required");
        }
        if (this.lgbt.length === 0) {
            throw new Error("lgbt is required");
        }
        if (this.age < 18 || this.age > 100) {
            throw new Error("age must be between 18 and 100");
        }
    }
}