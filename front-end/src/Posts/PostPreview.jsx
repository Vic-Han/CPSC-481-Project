import './NewPostOverLay.css'
// Not sure if you wanna use a different css file since they are so similar
function PostPreview(props) {
  const cancelEvent = props.close
  return (
    <>
      <div className='invis_layer'></div>
      <div className='post_overlay'>
      <div className='info_section'>
          <p>New Post</p>
          <button className='close_btn btn' onClick={cancelEvent}></button>
        </div>
            <button className='save_btn txt_btn'>Save Draft</button>
            <button className='post_btn txt_btn' onClick={cancelEvent}>Post</button>
          </div>
      
   
    </>
  );
}

export default PostPreview;
