"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CommentProps {
    anime_mal_id: string;
    user_email?: string;
    username?: string;
    anime_title?: string;
}
const CommentInput = (props: CommentProps) => {
    const { anime_mal_id, user_email, username, anime_title } = props;
    const [comment, setComment] = useState("");
    const [isCreated, setIsCreated] = useState(false);

    const router = useRouter()
    const handleInput = (e: any) => {
        setComment(e.target.value);
    };

    const handlePosting = async (e: any) => {
        e.preventDefault();
        const data = { anime_mal_id, user_email, comment, username, anime_title }
        const response = await fetch("/api/v1/comment", {
        method: "POST",
        body: JSON.stringify(data),
        });
        const postComment = await response.json();
        if (postComment.isCreated) {
        setIsCreated(true);
        setComment("")
        router.refresh()
        }
        return;
    };
    return (
        <div className="flex flex-col gap-2">
        {isCreated && <p className="text-white">postingan terkirim..</p>}
        <textarea
            className="h-32 w-full text-xl p-4"
            value={comment}
            onChange={handleInput}
        />
        <button
            className="py-2 px-3 bg-primary text-white capitalize w-52"
            onClick={handlePosting}
        >
            posting komentar
        </button>
        </div>
    );
};

export default CommentInput;
