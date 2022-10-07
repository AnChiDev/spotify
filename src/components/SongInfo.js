import { Songs } from '../Context';
import { useContext } from 'react'
export default function SongInfo(){
    const {song} = useContext(Songs)
    return(
        <div className='col-span-1 p-3'>
           <h2 className =' text-[#937DC2] font-bold'> Now playing</h2>
            <h2 className='text-fuchsia-800 text-xl'> {song.name} </h2>
        <div className ='w-[240px] m-auto mt-10'>
            <img className='w-full h-[250px]' src= {song.links.images[0].url} alt='singer'/>
        </div>
        <div className='flex justify-evenly items-center mt-10'>
            <img className='w-[70px] rounded-full' src={song.links.images[1].url}  alt='singer'/>
            <span className='text-xl text-fuchsia-700'>{song.author}</span>
        </div>
        </div>
    )
}