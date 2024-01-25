import React from 'react'

interface PaginitionProps{
    page:any;
    lastPage:any;
    setPage:any
}
const Paginition = (props:PaginitionProps) => {
    const {page, lastPage, setPage} = props;
    const handleNextPage = () =>{
        setPage((prevState:any) => prevState + 1)
    }

    const handlePrevPage = () =>{
        setPage((nextState:any) => nextState - 1)
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-2xl">
            {page <= 1 ? null:
            <button className='transition-all hover:text-primary' onClick={handlePrevPage}>Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null:
            <button className='transition-all hover:text-primary' onClick={handleNextPage}>Next</button>
            }
        </div>
    )
}

export default Paginition