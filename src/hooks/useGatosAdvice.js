import { useEffect, useState } from "react"

const useGatosAdvice = () => {
  const [catsAdvice, setcatsAdvice] = useState([])
  const endpoint = 'https://meowfacts.herokuapp.com/' // obtain cat's advice:str

  useEffect(() => {
    const fetchCatsAdvice = async () => {

      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        setcatsAdvice(data.data[0])
        console.log(data.data[0])

      } catch (err) {
        setCountCats([])
      }
    }

    if (endpoint) {
      fetchCatsAdvice()
    } else {
      setError(new Error("env is not defined in .env"))
    }
  }, [endpoint])

  return {
    catsAdvice,
  }
}

export default useGatosAdvice
