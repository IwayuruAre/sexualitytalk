import { User } from "@/core/domain/entities/user";

export class UserBuilder {
    private id: string = '';
    private name: string = '';
    private birth: Date = new Date();
    private sex: string = '';
    private lgbt: string[] = [];
    private prefecture: string = '';
    private chatRooms: string[] = [];
    private photos: string[] = [];
    private profile: string = '';

    constructor(id: string) {
        this.id = id;
    }

    setName(name: string): this {
        this.name = name;
        return this;
    }

    setBirth(birth: Date): this {
        this.birth = birth;
        return this;
    }

    setSex(sex: string): this {
        this.sex = sex;
        return this;
    }

    setLGBT(lgbt: string[]): this {
        this.lgbt = lgbt;
        return this;
    }

    setPrefecture(prefecture: string): this {
        this.prefecture = prefecture;
        return this;
    }

    setChatRooms(chatRooms: string[]): this {
        this.chatRooms = chatRooms;
        return this;
    }

    setPhotos(photos: string[]): this {
        this.photos = photos;
        return this;
    }

    setProfile(profile: string): this {
        this.profile = profile;
        return this;
    }

    build(): User {
        return new User(
            this.id,
            this.name,
            this.birth,
            this.sex,
            this.lgbt,
            this.prefecture,
            {
                chatRooms: this.chatRooms,
                photos: this.photos,
                profile: this.profile
            }
        );
    }
}