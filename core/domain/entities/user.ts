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
    }

    get id(): string {
        return this.id;
    }

    get birth(): Date {
        return this.birth;
    }

    get chatRooms(): string[] {
        return this._chatRooms;
    }

    get lgbt(): string[] {
        return this._lgbt;
    }

    get name(): string {
        return this.name;
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
    //#endregion  編集可能フィールド
}