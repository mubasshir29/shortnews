import React from 'react'
import './AddNews.css'

function AddNews() {
  return (
    <div className='addnews_content page_content' >
        <div className='news_form' >
            <input placeholder='News title'></input>
            <textarea placeholder='News Content' />
            <div className='file_input'>
                Select an image <input type="file" id="myfile" name="myfile"/>
            </div>
            <input placeholder='News URL'></input>
            <input placeholder='Reference Website Name'></input>
        </div>
        <button className='save_btn'>Save</button>
    </div>
  )
}

export default AddNews