import React from "react";
import "./style.css";
import MainHeader from "../Main_Header";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { useState } from "react";
import axios from "axios";
import Repo from "../Repositories";

function Mainscreen() {
  const [repositories, setRepositories] = useState([]);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    let userInfo = await axios.get(`https://api.github.com/users/${input}`);
    setData(userInfo.data);
    let repo = await axios.get(`https://api.github.com/users/${input}/repos`);
    setRepositories(repo.data);
  };

  return (
    <div className="main">
      <MainHeader />
      <div className="main-github">
        <div className="main-github-container">
          <h4 className="main-github-p">
            Please let me know your Github username
          </h4>
          <form className="main-github-form">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="main-github-form-input"
              type="text"
              placeholder="Github Username"
            />
            <button
              onClick={search}
              type="submit"
              className="main-github-form-btn"
            >
              Go for it
            </button>
          </form>
          <div className="main-github-profileCard">
            {data.avatar_url && (
              <>
                <img
                  className="main-github-logo"
                  src={data.avatar_url}
                  alt="github-logo"
                />
                <div className="main-github-cardItems">
                  <div className="main-github-cardItem">
                    <FileCopyIcon />{" "}
                    <p>
                      Hey {data.name} / you have {data.public_repos}{" "}
                      repositories in your Github :)
                    </p>{" "}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {data.avatar_url && (
        <>
          {repositories.map((repository) => (
            <Repo
              key={repository.id}
              id={repository.id}
              language={repository.language}
              name={repository.name}
              description={repository.description}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Mainscreen;
