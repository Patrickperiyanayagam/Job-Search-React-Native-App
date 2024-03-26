import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint,query)=>{
    const [data,setdata] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    const [error,seterror] = useState(null); 
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '9086ba073fmshafba55606edbc25p1a27ebjsn1ea8e4d73d25',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };
      
    const fetchData = async()=>{
        setisLoading(true);
    try{
        const response = await axios.request(options);
        setdata(response.data.data)
        setisLoading(false)
    }catch(error){
        seterror(error);
        alert('There is an error')
    }finally{
        setisLoading(false)
    }
}

useEffect(()=>{
    fetchData();
},[]);

const refetch = ()=>{
    setisLoading(true);
    fetchData();
}

return {data,isLoading,error,refetch};
}

export default useFetch;