import { useEffect, useState } from 'react';
import { Tags } from "./Tags";

import './NewPostOverLay.css'

function NewPostOverLay(props) {
  const cancelEvent = props.close;
  const previewPost = props.showPostPreview;
  const data = props.data;
  const setData = props.setData;

  const [saved, setSave] = useState(false);
  const [title, setTitle] = useState();
  const [files, setFiles] = useState([]);
  const [tags, setTags] = useState([]);
  const [unusedTags, setUnusedTags] = useState(Tags);
  const [tagQuery, setTagQuery] = useState("");

  useEffect(() => {
    handleLoadData();
  }, [])

  useEffect(() => {
    if (saved && document.getElementById('save_btn') != null) {
      document.getElementById('save_btn').style.backgroundColor = "#4E5080";
    } else if (document.getElementById('save_btn') != null){
      document.getElementById('save_btn').style.backgroundColor  = "#7e82df";
    }
  }, [saved]);

  const handleLoadData = () => {
    if (document.getElementById('post_title') != null)
      document.getElementById('post_title').value = data.Title;

    if ( document.getElementById('description_area') != null)
      document.getElementById('description_area').value = data.Description;

    setTags(data.Tags);
    setUnusedTags(data.UnusedTags);
    setTitle(data.Title);
    setFiles(data.Files);
    setSave(true);
  }

  const handleFileInput = (e) => {
    if (e.target.files.length > 0) {
      let tempFiles = [];
      for (let i = 0; i < e.target.files.length; i++) {
        if (!files.some(file=>file.name === e.target.files[i].name)) {
          let temp = {
            name: e.target.files[i].name,
            URL: URL.createObjectURL(e.target.files[i])
          }
          tempFiles.push(temp);
        }
        let text = document.getElementById('description_area').value;
        document.getElementById('description_area').value = text + `\n\`${e.target.files[i].name}\``;
      }
      setFiles([...files, ...tempFiles]);
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
      Description: document.getElementById('description_area').value,
      Tags: tags,
      UnusedTags: unusedTags,
      Files: files
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
      Description: "",
      Tags: [],
      UnusedTags: Tags,
      Files: []
    });
    document.getElementById('invis_layer').style.zIndex = 2;
    document.getElementById('confirmation_overlay').style.display = "none";
    cancelEvent();
  }

  const handleConfirmSave = () => {
    setData({
      Title: title,
      Description: document.getElementById('description_area').value,
      Tags: tags,
      UnusedTags: unusedTags,
      Files: files
    });
    document.getElementById('invis_layer').style.zIndex = 2;
    document.getElementById('confirmation_overlay').style.display = "none";
    cancelEvent();
  }

  const handleTagPress = () => {
    document.getElementById('invis_layer').style.zIndex = 4;
    document.getElementById('tags_overlay').style.display = "flex";
  }

  const handleCloseTag = () => {
    document.getElementById('invis_layer').style.zIndex = 2;
    document.getElementById('tags_overlay').style.display = "none";
  }

  const addTag = (e) => {
    if (!tags.includes(e.target.innerHTML)) {
      setTags([...tags, e.target.innerHTML]);
      setUnusedTags(unusedTags.filter(tag => tag !== e.target.innerHTML));
    }
    setSave(false);
  }

  const handlePreview = () => {
    setData({
      Title: title,
      Description: document.getElementById('description_area').value,
      Tags: tags,
      UnusedTags: unusedTags,
      Files: files
    });
    previewPost();
  }

  return (
    <>
      <div id='invis_layer' className='invis_background'></div>
      <div className='post_overlay'>
        <div className='info_section'>
          <p>New Post</p>
          <button className='close_btn btn' onClick={saved ? cancelEvent : askUser}></button>
        </div>
        <div className='title_section'>
          <input id='post_title' onChange={handleChanges} type='text' placeholder='Title' maxLength={70} autoComplete='off'></input>
        </div>
        <div className='text_section'>
          <textarea onChange={handleChanges} type='text' placeholder='Description' id='description_area'></textarea>
        </div>
        <div className='button_section'>
          <div className='left_section'>
            <label className='upload_btn txt_btn'>
              <input multiple accept='image/*' id='upload' type='file' onChange={handleFileInput}></input>
            </label>
            <button onClick={handleTagPress} className='tag_btn txt_btn'>Tag</button>
            <ul className='selected_tags'>
              {tags.slice(0,3).map((tag, i) => (
                <li key={i}>
                  <button>{tag}</button>
                </li>
              ))}
              {(tags.length > 3) ? <li>+ {tags.length - 3} more</li> : <li></li>}
            </ul>
          </div>
          <div className='right_section'>
            <button onClick={handleSave} id='save_btn'>{saved ? 'Saved' : 'Save Draft'}</button>
            <button className='post_btn txt_btn' onClick={handlePreview}>Preview & Post</button>
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
      <div id='tags_overlay'>
        <p>Add Tags</p>
        <button className='tags_close_btn btn' onClick={handleCloseTag}></button>
        <input type='text' placeholder='Search Tags...' maxLength={50} onChange={(e) => setTagQuery(e.target.value.toLowerCase())}></input>
        <ul className='tags_list'>
          {unusedTags.filter(tag=>tag.toLowerCase().includes(tagQuery)).slice(0,45).map((tag, i) => (
            <li key={i}>
              <button onClick={addTag} className='tags_item txt_btn'>{tag}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NewPostOverLay;
