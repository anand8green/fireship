import Animal from './components/Animal'
import useAnimalSearch from './components/useAnimalSearch'

const App = () => {
  const { search, animals } = useAnimalSearch()
  return (
    <div>
      <input type="text" onChange={(e) => search(e.target.value)} />
      {animals?.map((animal) => (
        <Animal key={animal.id} {...animal} />
      ))}
    </div>
  )
}

export default App
