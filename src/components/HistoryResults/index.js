import './index.css'

const HistoryResults = props => {
  const {data, removeLink} = props
  const {domainUrl, title, timeAccessed, logoUrl, id} = data

  const onClickRemoveLink = () => removeLink(id)
  return (
    <li className="links-list">
      <p className="time-data">{timeAccessed}</p>
      <div className="links-data">
        <img src={logoUrl} alt="domain logo" className="link-logo" />
        <p className="link-title">{title}</p>
        <p className="link-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={onClickRemoveLink}
        value={id}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          id={id}
          value="delete"
        />
      </button>
    </li>
  )
}

export default HistoryResults
