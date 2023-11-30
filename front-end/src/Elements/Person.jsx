import './Person.css';

function Person(props) {
  const data = props.data;

  return (
    <>
      <div className="person_short_main">
        <h1>{data.firstName} {data.lastName}</h1>
        <div className='person_short_right'>
          
          <img className={(data.profileURL === "ProfileDefault.png") ? "default_short_image" : "person_short_image"} src={require(`../assets/${data.profileURL}`)}></img>
          <button onClick={() => {
            props.setDeletedUsers([...props.deletedUsers, data.id]);
          }}></button>
        </div>
      </div>
      <div className='line'></div>
    </>
  )
}

export default Person;