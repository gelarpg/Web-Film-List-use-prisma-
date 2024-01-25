import React from "react";
import AnimeList from "../components/AnimeList/index";
import Header from "@/components/AnimeList/Header";
import { getAnimes, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimes("top/anime", "limit=8")
  let recommendAnime = await getNestedAnimeResponse('recommendations/anime', 'entry')
  recommendAnime = reproduce(recommendAnime, 4)
  

  return (
    <>
    {/* anime populer */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
        <AnimeList api={topAnime}/>
      </section>
    {/* anime rekomen */}
      <section>
        <Header title="Rekomendasi" linkHref="/populer" linkTitle=""/>
        <AnimeList api={recommendAnime}/>
      </section>
    </>
  );
};

export default Page;
