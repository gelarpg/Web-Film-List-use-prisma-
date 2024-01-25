import React from "react";
import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList/index";
import { getAnimes } from "@/libs/api-libs";

interface SearchProps{
  params: {
    keyword: string
  }
}
const Page = async (props:SearchProps) => {
  const {params} = props;
  const decodeKeyword = decodeURI(params.keyword);

  const searchAnime = await getAnimes("anime", `q=${decodeKeyword}`)

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodeKeyword}...`} linkHref={""} linkTitle={""} />
        <AnimeList api={searchAnime}/>
      </section>
    </>
  );
};

export default Page;
