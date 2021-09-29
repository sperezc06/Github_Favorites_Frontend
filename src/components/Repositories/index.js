import React from "react";
import "./style.css";
import { useStateValue } from "../../StateProvider";

function Repositories({ name, description, language, id, removeBtn }) {
  const [{}, dispatch] = useStateValue();
  const addToFav = () => {
    dispatch({
      type: "add-fav",
      item: {
        id: id,
        name: name,
        description: description,
        language: language,
      },
    });
  };
  const remove = () => {
    dispatch({
      type: "remove-fav",
      id: id,
    });
  };
  return (
    <>
      <div className="gh-full-container">
        {removeBtn ? (
          <div className="gh-container">
            <div className="gh-repo">
              <p>{language}</p>
              <h2>
                <span>Repository name:</span> {name}
              </h2>
            </div>
            <button onClick={remove}> Delete from favorites</button>
          </div>
        ) : (
          <div className="gh-container">
            <div className="gh-repo">
              <h2>
                <span>Repository name:</span> {name}
              </h2>
              <p>Language used : {language}</p>
            </div>
            <button onClick={addToFav} className="fav-button">
              {" "}
              Add me to your favorites
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Repositories;
