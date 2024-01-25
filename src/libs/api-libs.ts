export const getAnimes = async (resource: any, query: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse =  async(resource:any, objectProperty:string) =>{
    const response = await getAnimes(resource)
    return response.data.flatMap((item: { entry: any }) =>item[objectProperty])
}

export const reproduce = (data: string | any[], gap: number) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap
    
    const response={
        data:data.slice(first, last)
    }
    
    return response
}