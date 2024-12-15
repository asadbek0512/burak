import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";


export interface Member { /// datadan qaytadigan malumot
    _id: ObjectId;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: string;
    createdAt: Date;
    updateAt: Date;
}

export interface MemberInput { /// Dataga kiradigan malumot
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: string;
}
export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}