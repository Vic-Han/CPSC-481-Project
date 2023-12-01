import './StoreRecommended.css';
import PC from '../assets/PC.png';
import PS from '../assets/PS.png';
import XBOX from '../assets/Xbox.png';
import SWITCH from '../assets/Switch.png';
import { Link } from 'react-router-dom';

function StoreRecommended(props) {
  const data = props.data;

  return (
    <>
      <div className="recommended_store">
        <Link to={`/store/${data.id}`}><img className='recommended_game_image' src={data.images[1]}></img></Link>
        <div className='recommended_game_info'>
          <div className='recommended_game_text'>
            <Link to={`/store/${data.id}`}><h1>{data.title}</h1></Link>
            {((data.price - data.salePrice) > 0) ?
              <h3>PC Price: <p className='strikethrough'>${data.price}</p> <p>${data.salePrice}</p></h3> : <h3>PC Price: <p>${data.price}</p></h3>}
          </div>
          <div className='recommeded_game_availability'>
            {data.availability.map((type, i) => {
              if (type === "PC") return <img key={i} src={PC}></img>;
              else if (type === "PS") return <img key={i} src={PS}></img>;
              else if (type === "Xbox") return <img key={i} src={XBOX}></img>;
              else if (type === "Switch") return <img key={i} src={SWITCH}></img>;
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreRecommended;