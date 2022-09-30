const Animal = ({ type, name }) => {
  return (
    <ul>
      <li>
        <strong> {type}</strong>
        {name}
      </li>
    </ul>
  )
}

export default Animal
