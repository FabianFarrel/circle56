import { GetPostEntity } from "./post";
import { UserEntity } from "./user";

export interface ReplyEntity {
    id: number;
    content?: string;
    image?: string;
    likesCount?: number;
    repliesCount?: number;
    createdAt: Date;
    updatedAt: Date;
    timeAgo?: string;
    postId: number;
    post: GetPostEntity;
    author:  Omit<UserEntity, 'password'>;
}

export interface CreateReplyEntity {
    id: number;
    content?: string;
    image?: FileList;
    likesCount?: number;
    repliesCount?: number;
    createdAt: Date;
    updatedAt: Date;
    postId: number;
    post: GetPostEntity;
    author:  Omit<UserEntity, 'password'>;
}