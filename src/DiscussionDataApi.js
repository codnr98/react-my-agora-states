export const getDiscussion = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:4000/discussions")
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
};
