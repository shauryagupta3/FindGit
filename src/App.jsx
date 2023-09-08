import { useState, useEffect } from "react";
import DisplayData from "./Display.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DarkModeToggle } from "./DarkMode.jsx";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [searchVal, setSearch] = useState(null);
  const [data, setData] = useState(null);
  const [reposData, setreposData] = useState(null);

  useEffect(() => {
    if (searchVal != null) {
      fetchData();
    }
  }, [searchVal]);

  useEffect(() => {
    if (data != null) {
      fetchReposData();
    }
  }, [data]);

  const fetchReposData = async () => {
    const res = await fetch(data.repos_url);
    const json = await res.json();
    setreposData(json);
  };

  const handleClick = async () => {
    setSearch(inputText);
  };

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${searchVal}`);
    const json = await res.json();
    setData(json);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <div className="navbar">
        <span className="title">
          Find<span className="git">Git</span>
        </span>
        <DarkModeToggle />
      </div>
      <form action="">
        <label htmlFor="">Search </label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleChange}
          value={inputText}
          placeholder="Enter Username"
        />
        <button type="button" onClick={handleClick}>
        <FontAwesomeIcon  icon={faMagnifyingGlass} />        </button>
      </form>
      {data && reposData ? (
        <DisplayData data={data} reposData={reposData} />
      ) : (
        <h2></h2>
      )}
    </>
  );
}

export default App;
