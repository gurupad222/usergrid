import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="navbar-brand">Let's Grow More</span>
        <button className="btn" onClick={fetchUsers}>Get Users</button>
      </nav>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
