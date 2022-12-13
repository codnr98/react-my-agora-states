import {useEffect, useState} from "react";
import Discussion from "./Components/Discussion";

const Discussions = () => {
  const [discussionData, setDiscussionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((data) => setDiscussionData(data));
  }, []);

  return (
    <div>
      <ul>
        {discussionData.map((discussion) => (
          <Discussion data={discussion} />
        ))}
      </ul>
    </div>
  );
};

export default Discussions;
