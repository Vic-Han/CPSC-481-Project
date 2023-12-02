import Navbar from "../Components/Navbar/Navbar";
import SearchResults from "../Components/Search/SearchResults";

const Search = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <SearchResults/>
    </>
  )
}

export default Search;