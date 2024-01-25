"use client";

import { useState } from "react";

interface CollectionProps {
    anime_mal_id: string;
    user_email?: string;
    anime_image: string;
    anime_title?: string;
}
const CollectionButton = (props: CollectionProps) => {
    const [isCreated, setIsCreated] = useState(false)
    const { anime_mal_id, user_email, anime_image, anime_title } = props;

    const handleCollection = async (e: any) => {
        e.preventDefault();
        const data = { anime_mal_id, user_email, anime_image, anime_title };
        const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(data),
        });
        const collection = await response.json();
        if(collection.isCreated){
            setIsCreated(true)
        }
        return
    };
    return (
        <>
        {
            isCreated 
            ? 
            <p className="text-white">Berhasil ditambahkan ke koleksi</p>
            :
            <button
            onClick={handleCollection}
            className="px-2 py-1 bg-primary rounded-md"
            >
                Add To Collection
            </button>
        }
    </>
    );
};

export default CollectionButton;
