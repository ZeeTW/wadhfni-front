<<<<<<< HEAD
const Search = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
=======
const Search = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="search-form">
>>>>>>> a6f360fee998e0f8ede2b2229f088245992a79f4
      <input
        type="text"
        value={value}
        onChange={onChange}
<<<<<<< HEAD
      />
      <button type="submit">Search</button>
=======
        placeholder="Search for services..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
>>>>>>> a6f360fee998e0f8ede2b2229f088245992a79f4
    </form>
  )
}

export default Search
