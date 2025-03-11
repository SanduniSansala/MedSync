import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BookCard2 from '../../components/BookCard2'

const Book:React.FC = () => {
  return (
    <div>
       <Header/>
      <div>
        <BookCard2/>
      </div>
      <Footer/>
    </div>
  )
}

export default Book