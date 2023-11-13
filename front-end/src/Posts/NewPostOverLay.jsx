import { useEffect, useState } from 'react';
import './NewPostOverLay.css'

function NewPostOverLay(props) {
  const cancelEvent = props.close;
  const data = props.data;
  const setData = props.setData;

  const [saved, setSave] = useState(false);
  const [title, setTitle] = useState();

  let files = [];

  useEffect(() => {
    handleLoadData();
  }, [])

  useEffect(() => {
    if (saved) {
      document.getElementById('save_btn').style.backgroundColor = "#4E5080";
    } else {
      document.getElementById('save_btn').style.backgroundColor  = "#7e82df";
    }
  }, [saved]);

  const handleLoadData = () => {
    document.getElementById('post_title').value = data.Title;
    document.getElementById('description_area').value = data.Description;
    setTitle(data.Title);
    setSave(true);
  }

  const handleFileInput = (e) => {
    if (e.target.files.length > 0) {
      for (let i = 0; i < e.target.files.length; i++) {
        let temp = {
          name: e.target.files[i].name,
          URL: URL.createObjectURL(e.target.files[i])
        }
        files.push(temp);

        let text = document.getElementById('description_area').value;
        document.getElementById('description_area').value = text + `\n\`${e.target.files[i].name}\``;
      }
      setSave(false);
    }
    e.target.value = null;
  }

  const askUser = () => {
    document.getElementById('invis_layer').style.zIndex = 4;
    document.getElementById('confirmation_overlay').style.display = "flex";
  }

  const handleChanges = (e) => {
    if (e.target.id === 'post_title') setTitle(e.target.value);
    setSave(false);
  }

  const handleSave = () => {
    setData({
      Title: title,
      Description: document.getElementById('description_area').value
    });
    setSave(true);
  }

  const handleCancelSave = () => {
    document.getElementById('invis_layer').style.zIndex = 2;
    document.getElementById('confirmation_overlay').style.display = "none";
  }

  const handleDelete = () => {
    setData({
      Title: "",
      Description: ""
    });
    document.getElementById('invis_layer').style.zIndex = 2;
    document.getElementById('confirmation_overlay').style.display = "none";
    cancelEvent();
  }

  const handleConfirmSave = () => {
    setData({
      Title: title,
      Description: document.getElementById('description_area').value
    });
    document.getElementById('invis_layer').style.zIndex = 2;
    document.getElementById('confirmation_overlay').style.display = "none";
    cancelEvent();
  }

  return (
    <>
      <div id='invis_layer'></div>
      <div className='post_overlay'>
        <div className='info_section'>
          <p>New Post</p>
          <button className='close_btn btn' onClick={saved ? cancelEvent : askUser}></button>
        </div>
        <div className='title_section'>
          <input id='post_title' onChange={handleChanges} type='text' placeholder='Title' maxLength={70}></input>
        </div>
        <div className='text_section'>
          <textarea onChange={handleChanges} type='text' placeholder='Description' id='description_area'></textarea>
        </div>
        <div className='button_section'>
          <div className='left_section'>
            <label className='upload_btn txt_btn'>
              <input multiple accept='image/*' id='upload' type='file' onChange={handleFileInput}></input>
            </label>
            <button className='tag_btn txt_btn'>Tag </button>
          </div>
          <div className='right_section'>
            <button onClick={handleSave} id='save_btn'>Save Draft</button>
            <button className='post_btn txt_btn'>Preview & Post</button>
          </div>
        </div>
      </div>
      <div id='confirmation_overlay'>
        <div className='confirmation_title'>
          <p>Are You Sure</p>
          <button className='confirm_close_btn btn' onClick={handleCancelSave}></button>
        </div>
        <p className='confirmation_text'>Do you want to save a draft of your post?</p>
        <div className='confirmation_options'>
          <button onClick={handleConfirmSave} className='confirm_save txt_btn'>Save Draft</button>
          <button onClick={handleDelete} className='confirm_delete txt_btn'>Delete Draft</button>
        </div>
      </div>
    </>
  );
}

export default NewPostOverLay;
