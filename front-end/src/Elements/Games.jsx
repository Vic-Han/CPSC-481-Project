import './Games.css';
import { Link } from 'react-router-dom';
function Games(props) {
  const data = props.data;

  return (
    <>
      <div className="game_short_main">
        <div className='game_short_title'>
          <Link to={`/store/${data.id}`}><h1>{data.title}</h1></Link>
          <button onClick={() => {
            props.setDeletedGames([...props.deletedGames, data.id]);
          }}></button>
        </div>
        <p className='game_short_description'>{data.description.substring(0, 150)}...</p>
        {data.images.length > 0 ? <img className='game_short_image' src={data.images[0]}></img> : null}
      </div>
      <div className='line'></div>
    </>
  )
}

export default Games;