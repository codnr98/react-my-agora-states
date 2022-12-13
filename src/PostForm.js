import {useState} from "react";

const PostFrom = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handlePostClick = () => {
    fetch();
  };

  return (
    <form className='post-form'>
      <div>
        <span>title</span>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div>
        <span>name</span>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div>
        <span>content</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <input type='button' value='submit' onClick={handlePostClick} />
    </form>
  );
};
export default PostFrom;
