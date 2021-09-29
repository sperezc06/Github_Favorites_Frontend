import React from "react";
import { useStateValue } from "../../StateProvider";
import "./style.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function MultiplEvents({ id, language, description, name, removeBtn }) {
  const [{}, dispatch] = useStateValue();
  const addToFav = () => {
    dispatch({
      type: "add-events",
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
      type: "remove-events",
      id: id,
    });
  };
  return (
    <>
      {removeBtn ? (
        <div className="gh-container">
          <div className="gh-repo">
            <p>{language}</p>
            <h2>
              <span>Repository name:</span> {name}
            </h2>
            <h4>
              <span>Description:</span> {description}
            </h4>
          </div>
          <button onClick={remove}> REMOVE</button>
        </div>
      ) : (
        <div className="gh-container">
          <div className="gh-repo">
            <p>{language}</p>
            <h2>
              <span>Repository name:</span> {name}
            </h2>
            <h4>
              <span>Description:</span> {description}
            </h4>
          </div>
          <button onClick={addToFav}>
            {" "}
            <input type="checkbox" className="fav-star-icon">
              <StarBorderIcon /> Add to favorites
            </input>
          </button>
        </div>
      )}
    </>
  );
}

export default MultiplEvents;
