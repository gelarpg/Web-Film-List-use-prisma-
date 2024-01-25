"use client"
import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Paginition from '@/components/Utilities/Paginition'
import React, { useEffect, useState } from 'react'
import { getAnimes } from '../../libs/api-libs'

const Page =  () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () =>{
      const populerAnime = await getAnimes("top/anime", `page=${page}`)
      setTopAnime(populerAnime)
  }

  useEffect(()=>{
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
        <AnimeList api={topAnime}/>
      <Paginition page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </>
  )
}

export default Page