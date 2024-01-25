import { getAnimes } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSection } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";
 
const Page = async ({ params: { id } }) => {
  const anime = await getAnimes(`anime/${id}`);
  const user = await authUserSection();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  });
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-white text-3xl font-bold">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email ?? undefined}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="px-4 pt-4 flex gap-2 text-white overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-white p-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-white p-2">
          <h3>SKORE</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-white p-2">
          <h3>ANGGOTA</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-white p-2">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="px-4 py-4 flex sm:flex-nowrap flex-wrap gap-2 text-white">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.title}
          width={250}
          height={250}
          className="w-full rounded-md object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h4 className="text-white text-lg">Komentar Penonton</h4>
        <CommentBox anime_mal_id={id} />
        {user &&
        <CommentInput anime_mal_id={id} user_email={user?.email ?? undefined} username={user?.name ?? undefined} anime_title={anime.data.title}/>
        }
      </div>
      <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
    </>
  );
};

export default Page;
