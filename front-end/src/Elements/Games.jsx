import './Games.css';

function Games(props) {
  const data = props.data;

  return (
    <>
      <div className="game_short_main">
        <div className='game_short_title'>
          <h1>{data.title}</h1>
          <button onClick={null}></button>
        </div>
        <p className='game_short_description'>{data.description.substring(0,150)}...</p>
        {data.images.length > 0 ? <img className='game_short_image' src={data.images[0]}></img>: null}
      </div>
      <div className='line'></div>
    </>
  )
}

export default Games;