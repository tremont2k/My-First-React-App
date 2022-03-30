import logo from "./logo.svg";
import "./App.css";
import Book from "./Components/Book";
import Movie from "./Components/Movie";

function App() {
  return (
    <div>
      <div className="moviesContainer">
        <Movie />
        <Movie />
      </div>
      <div className="booksContainer">
        <Book name="Book 1" publishDate="10/10/2022" />
        <Book name="Book 2 is the best" publishDate="10/10/2022" />
        <Book name="Book 3" publishDate="10/10/2022" />
      </div>
    </div>
  );
}

export default App;
