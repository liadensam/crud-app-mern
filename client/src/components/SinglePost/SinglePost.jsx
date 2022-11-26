import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img
          src="https://images.pexels.com/photos/259351/pexels-photo-259351.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="single post image"
          className="singlepostImg"
        />
        <h1 className="singlepostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlepostEdit">
            <i className="singlepostIcon fa-solid fa-pen"></i>
            <i className="singlepostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author: <b>Name</b>
          </span>
          <span className="singlepostDate">1 hour ago</span>
        </div>
        <p className="singlepostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          numquam consequatur voluptas nemo fuga excepturi autem incidunt
          dolores sint repudiandae, obcaecati esse, earum cupiditate soluta
          repellat dicta minus sit dolorem.Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rerum numquam consequatur voluptas nemo
          fuga excepturi autem incidunt dolores sint repudiandae, obcaecati
          esse, earum cupiditate soluta repellat dicta minus sit dolorem.Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Rerum numquam
          consequatur voluptas nemo fuga excepturi autem incidunt dolores sint
          repudiandae, obcaecati esse, earum cupiditate soluta repellat dicta
          minus sit dolorem.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rerum numquam consequatur voluptas nemo fuga excepturi autem
          incidunt dolores sint repudiandae, obcaecati esse, earum cupiditate
          soluta repellat dicta minus sit dolorem.Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rerum numquam consequatur voluptas nemo
          fuga excepturi autem incidunt dolores sint repudiandae, obcaecati
          esse, earum cupiditate soluta repellat dicta minus sit dolorem.Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Rerum numquam
          consequatur voluptas nemo fuga excepturi autem incidunt dolores sint
          repudiandae, obcaecati esse, earum cupiditate soluta repellat dicta
          minus sit dolorem.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rerum numquam consequatur voluptas nemo fuga excepturi autem
          incidunt dolores sint repudiandae, obcaecati esse, earum cupiditate
          soluta repellat dicta minus sit dolorem.Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rerum numquam consequatur voluptas nemo
          fuga excepturi autem incidunt dolores sint repudiandae, obcaecati
          esse, earum cupiditate soluta repellat dicta minus sit dolorem.
        </p>
      </div>
    </div>
  );
}
