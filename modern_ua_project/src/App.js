import React from "react";
import Article from "./Component/Article/Article";
import Brand from "./Component/Brand/Brand";
import Navbar from "./Component/Navbar/Navbar";
import Cta from "./Component/Cta/Cta";
import Feature from "./Component/Feature/Feature";
import Blog from "./Container/Blog/Blog";
import Features from "./Container/Features/Features"
import WhatGpt from "./Container/WhatGpt/WhatGpt";
import Header from "./Container/Header/Header";
import Footer from "./Container/Footer/Footer";
import Possibility from "./Container/Possibility/Possibility";
import './App.css'


const App=()=>{
    return(
        <div className="App">
          <div className="gradient_bg">
           <Navbar/>
           <Header/>
          </div>
          <Brand/>
          <WhatGpt/>
          <Features/>
           <Possibility/>
           <Cta/>
           <Blog/>
           <Footer/>
        </div>
    )
}

export default App;