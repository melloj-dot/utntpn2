import { useEffect, useState } from "react"

const useGatosCount = () => {
  const [catsCount, setCountCats] = useState([])
  const initialUrl = import.meta.env.VITE_CAT_API_URL
  const endpoint = initialUrl + 'api/count' // obtain cats count:int

  useEffect(() => {
    const fetchCountCats = async () => {

      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        setCountCats(data.count)
        //console.log(data.count)

      } catch (err) {
        setCountCats([])
      } finally {
        
      }
    }

    if (endpoint) {
      fetchCountCats()
    } else {
      setError(new Error("env is not defined in .env"))
    }
  }, [endpoint])

  return {
    catsCount,

  }
}

export default useGatosCount
