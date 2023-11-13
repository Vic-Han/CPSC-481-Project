import './NewPostOverLay.css'

function NewPostOverLay(props) {
  const cancelEvent = props.close
  const previewPost = props.previewPost
  return (
    <>
      <div className='invis_layer'></div>
      <div className='post_overlay'>
        <div className='info_section'>
          <p>New Post</p>
          <button className='close_btn btn' onClick={cancelEvent}></button>
        </div>
        <div className='title_section'>
          <input type='text' placeholder='Title'></input>
        </div>
        <div className='text_section'>
          <textarea type='text' placeholder='Description'></textarea>
        </div>
        <div className='button_section'>
          <div className='left_section'>
            <button className='upload_btn txt_btn'></button>
            <button className='tag_btn txt_btn'>Tag </button>
          </div>
          <div className='right_section'>
            <button className='save_btn txt_btn'>Save Draft</button>
            <button className='post_btn txt_btn' onClick={previewPost}>Preview & Post</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPostOverLay;
