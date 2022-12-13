import {useEffect, useState} from "react";
import Discussion from "./Components/Discussion";
import {getDiscussion} from "./DiscussionDataApi";

const Discussions = () => {
  const [discussionData, setDiscussionData] = useState([]);

  useEffect(() => {
    getDiscussion().then((data) => setDiscussionData(data));
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
