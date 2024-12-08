import { UserOptions } from "./userOptions";

export class User {
    private readonly _id: string;
    private readonly _birth: Date;
    private readonly _name: string;
    private readonly _sex: string;
    private _chatRooms: string[];
    private _lgbt: string[];
    private _photos: string[];
    private _prefecture: string;
    private _profile: string;
    private _createdAt: Date | null;
    private _updatedAt: Date | null;

    constructor(
        id: string,
        name: string,
        birth: Date,
        sex: string,
        lgbt: string[],
        prefecture: string,
        options: UserOptions = {}
    ) {
        this._id = id;
        this._birth = birth;
        this._lgbt = lgbt;
        this._name = name;
        this._sex = sex;
        this._prefecture = prefecture;
        this._chatRooms = options?.chatRooms || [];
        this._photos = options?.photos || [];
        this._profile = options?.profile || "";
        this._createdAt = options?.createdAt || null;
        this._updatedAt = options?.updatedAt || null;
        this.validate();
    }

    get id(): string {
        return this._id;
    }

    get birth(): Date {
        return this._birth;
    }

    get chatRooms(): string[] {
        return this._chatRooms;
    }

    get lgbt(): string[] {
        return this._lgbt;
    }

    get name(): string {
        return this._name;
    }

    get photos(): string[] {
        return this._photos;
    }

    get prefecture(): string {
        return this._prefecture;
    }

    get profile(): string {
        return this._profile;
    }

    get sex(): string {
        return this._sex;
    }

    get age(): number {
        const today = new Date();
        let age = today.getFullYear() - this._birth.getFullYear();
        const birthMonth = this._birth.getMonth();
        const birthDay = this._birth.getDate();

        if (
            today.getMonth() < birthMonth ||
            (today.getMonth() === birthMonth && today.getDate() < birthDay)
        ) {
            age--;
        }
        return age;
    }

    get createdAt(): Date | null {
        return this._createdAt;
    }

    get updatedAt(): Date | null {
        return this._updatedAt;
    }

    //#region  編集可能フィールド
    public updateProfile(profile: string): void {
        this._profile = profile;
    }

    public updatePrefecture(prefecture: string): void {
        this._prefecture = prefecture;
    }

    public updateLGBT(lgbt: string[]): void {
        this._lgbt = lgbt;
    }

    public updatePhotos(photos: string[]): void {
        this._photos = photos;
    }

    public updateCreatedAt(cretaedAt: Date) {
        this._createdAt = cretaedAt;
    }

    public updateUpdatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
    }
    //#endregion  編集可能フィールド

    private validate(): void {
        if (this.id === "") {
            throw new Error("id is required");
        }
        if (this.name === "") {
            throw new Error("name is required");
        }
        if (this.sex === "") {
            throw new Error("sex is required");
        }
        if (this.prefecture === "") {
            throw new Error("prefecture is required");
        }
        if (this.lgbt.length === 0) {
            throw new Error("lgbt is required");
        }
        if (this.age < 18 || this.age > 100) {
            throw new Error("age must be between 18 and 100");
        }
    }
}