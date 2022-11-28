import { useContext, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Context } from "../../context/Context";
import axios from "axios";
import "./settings.css";

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5002/images/";

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Change profile picture</label>
          <div className="settingsPP">
            {user.profilePic ? (
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : publicFolder + user.profilePic
                }
                alt="Profile picture. Click on file input to edit"
              />
            ) : (
              <img
                src={
                  file ? URL.createObjectURL(file) : publicFolder + "smile.png"
                }
                alt="Profile picture. Click on file input to edit"
              />
            )}

            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-rotate"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span className="successMsg">Profile has been updated</span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
}
