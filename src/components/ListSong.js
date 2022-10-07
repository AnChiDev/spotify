import { useContext, useState, useEffect } from "react";
import { Songs } from "../Context";

export default function ListSong(){
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setidSong] = useState(0);
    const handlePlaySong = (idSong) => {
      setidSong(idSong)
      handleSetSong(idSong)
    };
    useEffect(() => {
      setidSong(song.id)
    }, [song])
    return(
        <div className ="col-span-2 overflow-y-scroll">
<table className = "table-auto w-full ">
    <thead className ="text-[#937DC2]">
        <tr>
            <th>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className="fa-solid fa-download"></i></th>
        </tr>
    </thead>
    <tbody>
        {
            DataSongs.map((song,index)=>(
                <tr key={index} className={`h-12 bg-[#C689C6] text-white hover:bg-pink-400 ${idSong === song.id && 'bg-slate-200 text-purple-800'}`} onClick={()=>handlePlaySong(song.id)}>
                <td className='text-center'>{index+1}</td>
                <td>{song.name}</td>
                <td className='text-center'>{song.author}</td>
                <td className='text-center'>
                    <a href={song.url}><i className="fa-solid fa-download"></i></a>
                </td>
    
            </tr>
            ))
        }
       
    </tbody>
</table>
        </div>
    )
}