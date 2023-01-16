import React from 'react'
import './NewsCard.css'

function NewsCard({data}) {
    console.log(data)
  return (
    <div className='card'>
        <img src={data.image} alt='sachin_sehwag_picture'></img>
        <div className='card_right'>
            <div className='card_right_content'>
                <h2 className='card_title'>{data.title}</h2>
                <p className='card_author_content' >{data.created_at} <span className='card_author bold'>{data.author}</span> بہ تحریر</p>
                <span className='card_content'>{data.content}</span>
            </div>
            <a className='card_right_ref_link' href=''> <span  className='bold'>{data.reference_name}</span> مزید تفصیل سے پڑھیں </a>
        </div>
    </div>
  )
}

export default NewsCard