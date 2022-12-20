import './index.css'

const CountriesList = props => {
  const {countryDetail, visitedCountry} = props
  const {id, name, isVisited} = countryDetail

  const visitButton = isVisited ? '' : 'button-text'
  const visitButtonText = isVisited ? 'Visited' : 'Visit'

  const onClickVisit = () => {
    visitedCountry(id)
  }

  return (
    <li className="country-list-item">
      <p>{name}</p>
      {isVisited ? (
        <p>{visitButtonText}</p>
      ) : (
        <button
          type="button"
          className={`visit-button ${visitButton}`}
          onClick={onClickVisit}
        >
          {visitButtonText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
