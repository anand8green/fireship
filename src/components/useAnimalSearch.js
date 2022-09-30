import { useEffect, useState } from 'react'

const useAnimalSearch = () => {
  const [animals, setAnimals] = useState([])

  const search = async (q) => {
    // When you do query string, search params use itlike this.
    const res = await fetch(
      'http://localhost:8000/?' + new URLSearchParams({ q })
    )
    const data = await res.json()
    console.log(data)
    setAnimals(data)
    localStorage.setItem('lastQuery', q)
  }

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery')
    if (lastQuery) {
      search(lastQuery)
    }
  }, [])

  return { search, animals }
}

export default useAnimalSearch
