import { useEffect, useState } from "react"

const useGatosApi = () => {
  const [cats, setCats] = useState([])
  const [catsCount, setCountCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const initialUrl = import.meta.env.VITE_CAT_API_URL



  useEffect(() => {
    const fetchCats = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(initialUrl)
        //const catsCount = await fetch('https://cataas.com/api/count')

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
        setCountCats(catsCount)
        console.log(catsCount)
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

    if (initialUrl) {
      fetchCats()
    } else {
      setError(new Error("env is not defined in .env"))
      setLoading(false)
    }
  }, [initialUrl])

  return {
    cats,
    loading,
    error,
/*     catsCount */
  }
}

export default useGatosApi
