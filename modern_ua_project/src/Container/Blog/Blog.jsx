import React from 'react'
import './blog.css'
import Article from '../../Component/Article/Article'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      
   <div className='gpt3__blog-heading'>
    <h1 className='gradient_text'>
    A lot is happening, 
We are blogging about it.
    </h1>
   </div>


   <div className='gpt3__blog-container'>

     <div className='gpt3__blog-container_groupA'>
      <Article imageUrl={blog01} title="GPT-3 and open AI is the future. Let us explore how it is?"/>
     </div>
      <div className='gpt3__blog-container_groupB'>
     <Article imageUrl={blog02} date="Sep 26,2021" title="GPT-3 and open AI is the future. Let us explore how it is?"/>
     <Article imageUrl={blog03} date="Sep 26,2021" title="GPT-3 and open AI is the future. Let us explore how it is?"/>
     <Article imageUrl={blog04} date="Sep 26,2021" title="GPT-3 and open AI is the future. Let us explore how it is?"/>
     <Article imageUrl={blog05} date="Sep 26,2021" title="GPT-3 and open AI is the future. Let us explore how it is?"/>
</div>

   </div>

    </div>
  )
}

export default Blog
