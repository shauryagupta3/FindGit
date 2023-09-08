import React from "react";
import "./display.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const DisplayData = ({ data, reposData }) => {
  let allRepos = [];

  for (var i in reposData) {
    allRepos.push([i, reposData[i]]);
  }

  function sortRepos(a, b) {
    if (a[1].created_at < b[1].created_at) {
      return 1;
    }
    if (a[1].created_at > b[1].created_at) {
      return -1;
    } else {
      return 0;
    }
  }

  allRepos.sort(sortRepos);
  allRepos.splice(4);

  function DisplayRepos() {
    for (var i = 0; i > allRepos.length; i++) {
      return <a>{allRepos[i][1].name}</a>;
    }
  }

  const dispRepos = allRepos.map((obj, i) => (
    <li key={i}>
      <a href={obj[1].homepage} target="_blank" rel="noopener noreferrer">{obj[1].name}</a> (
      <a href={obj[1].html_url}>repo</a>)
    </li>
  ));

  return (
    <div className="data">
      <img src={data.avatar_url} alt="" />
      <div className="details">
        <p><span className="label">Username</span> : {data.login} </p>
        <p><span className="label">Name</span> : {data.name}</p>
        <p><span className="label">Number of repos</span> : {data.public_repos}</p>
        <a href={data.html_url}><button id="github">Go To <FontAwesomeIcon icon={faGithub} /></button></a>
      </div>
      <div className="repos">
        <p>Newest Repos</p>
        <ol>{allRepos && dispRepos}</ol>
      </div>
    </div>
  );
};

export default DisplayData;
