import "./Discussion.css";
const Discussion = (props) => {
  return (
    <li className='discussion'>
      <div className='discussion__head'>
        <div className='discussion__img'>
          <img src={props.data.avatarUrl} alt=''></img>
        </div>
        <h2 className='discussion__title'>{props.data.title}</h2>
      </div>

      <div>
        <span className='discussion__updateAt'>{props.data.updatedAt}</span>
        <span className='discussion__author'>{props.data.author}</span>
      </div>
    </li>
  );
};
export default Discussion;
