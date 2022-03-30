import "./Book.css"
const Book = (props) => {
    return (
      <div className="book">
        <h1>{props.name}</h1>
      </div>
    );
}

export default Book;