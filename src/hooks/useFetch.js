import { useEffect, useState } from "react";
import axios from "axios";


const useFetch=(URL)=>{
    const [data,setData]=useState([]);
    const [error, setError] = useState(null)   


    const fetchData = async ()=>{
        try {
            const {data:responseData} = await axios.get(URL)
            setData(responseData)
            
        } catch (err) {
            setError(err.message)
        }
    }
            
    useEffect(()=>{
        fetchData()
    },[]);
    return {error,data};
}


export default useFetch;