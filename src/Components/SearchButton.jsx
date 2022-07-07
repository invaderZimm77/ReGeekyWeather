export default function SearchButton({ handleClick }) {
  return (
    <button
      className="search-button"
      onClick={(event) => {
        event.preventDefault()
        console.log("Searching...");
        handleClick();
      }}
    >
      Search
    </button>
  );
}
