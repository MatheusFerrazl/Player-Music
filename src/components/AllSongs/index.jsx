import './AllSongs.css'

function AllSongs({ children }) {
    return (
        <>
            <div className='grid-box'>
                {children}
            </div>
        </>
    )
}

export default AllSongs