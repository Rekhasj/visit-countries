import './index.css'

const VisitedCountries = prop => {
  const {visitedList, removeCountry} = prop
  const {id, name, imageUrl} = visitedList

  const onClickRemove = () => {
    removeCountry(id)
  }

  return (
    <li className="country-flag-list-item">
      <img src={imageUrl} alt="thumbnail" className="country-flag" />
      <div className="flag-name-card">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
