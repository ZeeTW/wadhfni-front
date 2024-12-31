const Search = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for services..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  )
}

export default Search
