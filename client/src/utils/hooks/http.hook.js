import {useState, useCallback} from 'react'
import axios from 'axios'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method ='get', body = null, headers= {}) => {
        setLoading(true)
        try{
            if(body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            let data;
            const response = await axios({method, url, data:body, headers}).then(res => {
                data = res.data;
            })
            

           

            setLoading(false)

            return data
        }
        catch (e){
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}