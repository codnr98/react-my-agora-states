import {useEffect, useState} from "react";

const Discussions = () => {
  const [discussionData, setDiscussionData] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((data) => setDiscussionData(data));
  }, []);
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default Discussions;
