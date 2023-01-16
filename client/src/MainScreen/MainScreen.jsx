import React from 'react'
import './MainScreen.css'
import NewsCard from '../NewsCard/NewsCard'
import newsData from './../SampleData/newsData.json'

function MainScreen() {
  return (
    <div className='main_content page_content'>
      <div className='news_cards'>
          {newsData.map(news => <NewsCard data={news} />)}
      </div>
    </div>
  )
}

export default MainScreen