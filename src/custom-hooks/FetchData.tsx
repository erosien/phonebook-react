import { useState } from "react"
import { server_calls } from "../api/server"
import { useEffect } from "react"

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    //useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, []) 

    return { contactData, getData:handleDataFetch }
    
    // with nothing there it will occur everytime something changes,
    // with just the empty array it will occur on mount (when the datatable component
    // comes into existence, then this will occur one time)
    // we could put [componentName] there and it would occur when that component changes
}

export default useGetData