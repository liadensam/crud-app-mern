import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="post image"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet.</span>
        <hr />
        <span className="postDate">1 h ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        dolorum dignissimos assumenda numquam, saepe ducimus aliquid sit nisi
        voluptates ex architecto culpa eveniet, commodi quaerat molestias!
        Veritatis, magni ex.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        dolorum dignissimos assumenda numquam, saepe ducimus aliquid sit nisi
        voluptates ex architecto culpa eveniet, commodi quaerat molestias!
        Veritatis, magni ex.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        dolorum dignissimos assumenda numquam, saepe ducimus aliquid sit nisi
        voluptates ex architecto culpa eveniet, commodi quaerat molestias!
        Veritatis, magni ex.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        dolorum dignissimos assumenda numquam, saepe ducimus aliquid sit nisi
        voluptates ex architecto culpa eveniet, commodi quaerat molestias!
        Veritatis, magni ex.
      </p>
    </div>
  );
}
