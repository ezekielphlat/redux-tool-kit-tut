import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const userList = useSelector((state) => state.users.value);
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          value={name}
          placeholder="Name...."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          value={username}
          placeholder="Username...."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(addUser({ id: userList.length, name, username }));
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
