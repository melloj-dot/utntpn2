import { useEffect, useState } from "react"

const useGatosApi = () => {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const initialUrl = import.meta.env.VITE_CAT_API_URL

  const endpoint = initialUrl + 'api/cats?limit=11'

  useEffect(() => {
    const fetchCats = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const catsData = Array.isArray(data) ? data : data.results

        const filteredCats = [] // set an empty array to add elements that have tags and will display an image
        catsData.forEach(element => {
            if (element.tags.length === 0) {
                //if array is empty do nothing
            }else{
                filteredCats.push(element) 
            }
        });

        setCats(filteredCats)
        console.log(catsData)
        console.log(filteredCats)

      } catch (err) {
        console.error(err)
        setError(err)
        setCats([])
      } finally {
        setLoading(false)
      }
    }

    if (endpoint) {
      fetchCats()
    } else {
      setError(new Error("env is not defined in .env"))
      setLoading(false)
    }
  }, [endpoint])

  return {
    cats,
    loading,
    error,
  }
}

export default useGatosApi
