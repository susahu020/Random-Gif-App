import React, { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';


const Tag = () => {

    const [tag, setTag] = useState('');

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState("false")


    // async function fetchData(){
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource)
    //     setLoading(false)
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

  // create a custom hook 

   const {gif, loading, fetchData} = useGif(tag)


    function changeHandler(event){
      setTag(event.target.value)
    }

  return (
    <div className='w-1/2 bg-blue-300 flex flex-col items-center gap-y-5 rounded-xl border border-black'>
        <h1 className='text-2xl underline uppercase font-semibold mt-3'>Random {tag} Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt="gifs" width="450"/>)
        }

        <input className='w-9/12 bg-red-50 rounded-md p-1 text-lg outline-none text-center' onChange={changeHandler} value={tag}/>
        
        <button onClick={()=>fetchData(tag)} className='w-9/12 bg-red-50 rounded-md p-1 text-lg font-medium mb-3'>Generate</button>

    </div>
  )
}

export default Tag