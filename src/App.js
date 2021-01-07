import githubImg from './github-mark.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState();
  const [userData, setUserData] = useState();

  const handleSubmit = (event) =>{
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`).then(res => res.json()).then(user => setUserData(user));
  }

  const handleChange = (event) => {
    let input = event.target.value;
    setSearch(input);
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Github User</label>
          <div className="input-group">
            <input
            type="text"
            className="form-control" 
            required
            value={search}
            onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
          src={githubImg}
          className="responsive rounded-circle"
          alt="Github"
          height="200px"
        />  
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              alt="Github"
              height="200px"
            />
            <h1 className="pt-3">
              <a href={userData.html_url} target="new">{userData.name}</a>
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} target="new">Site</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
