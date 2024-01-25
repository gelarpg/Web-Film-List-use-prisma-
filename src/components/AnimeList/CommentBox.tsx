import prisma from '@/libs/prisma'
import React from 'react'

interface CommentBoxProps{
    anime_mal_id:string
}
const CommentBox = async (props:CommentBoxProps) => {
    const {anime_mal_id} = props
    const comments = await prisma.comment.findMany({where:{anime_mal_id}})
  return (
    <div className='grid grid-cols-4 gap-4 mb-3'>
        {comments.map((comment:{id:number,username:string,comment:string})=>{
            return (
                <div key={comment.id} className='text-quaternary bg-white rounded-md p-2'>
                    <p>{comment.username}</p>
                    <p>{comment.comment}</p>
                </div>
            )
        })}
    </div>
  )
}

export default CommentBox