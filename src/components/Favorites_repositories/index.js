import React from "react";
import { useStateValue } from "../../StateProvider";
import MainHeader from "../Main_Header";
import Repositories from "../Repositories";
import "./style.css";

function FavRepos() {
  const [{ repoId }] = useStateValue();
  return (
    <div>
      <MainHeader fav />
      <div className="favContainer">
        {repoId?.length === 0 ? (
          <div className="favRepos">
            <h2 className="favRepos-title">
              Hey, your favorites list is empty :( !
            </h2>
            <p className="favRepos-p">
              If you want to add some Github repositories to your favorites
              please go to the home page (click on the Github logo) and just
              look for your Github user and use the add to favorite button =)
            </p>
          </div>
        ) : (
          <div className="favRepos">
            <h2 className="favRepos-title">List of favorites repositories </h2>
            {repoId.map((item) => (
              <Repositories removeBtn id={item.id} name={item.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FavRepos;
