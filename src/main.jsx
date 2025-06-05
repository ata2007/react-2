import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import './style.css'
import Header from "./Header"
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import Row4 from "./Row4"
import Row5 from "./Row5"
import Row6 from "./Row6"
import Row7 from "./Row7"
import Row8 from "./Row8"
import Row9 from  "./Row9"
import Row10 from "./Row10"
import Sidenav from './Sidenav';









createRoot(document.getElementById('root')).render(
   <StrictMode>
       <Header/>
       <Sidenav/>
       <Row1/>
       <Row2/>
       <Row3/>
       <Row4/>
       <Row5/>
       <Row6/>
       <Row7/>
       <Row8/>
        <Row9/>
       <Row10/>
       


   </StrictMode>
)