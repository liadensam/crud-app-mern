import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Black & White</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img
        className="headerImg"
        src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="header image"
      />
    </div>
  );
}
