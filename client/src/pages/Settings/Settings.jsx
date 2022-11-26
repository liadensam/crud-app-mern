import SideBar from "../../components/SideBar/SideBar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/39070/white-horse-white-horse-black-background-39070.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="profile picture"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-face-smile"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="name" />
          <label>Email</label>
          <input type="email" placeholder="email@email.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
