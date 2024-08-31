import React, { useState } from 'react'
import {Link,useLocation,useNavigate} from "react-router-dom"
import { menuItems } from '@/utils/constant'

const Navigation = () => {
 const [currentIndex,setCurrentIndex] = useState(-1)
 const {pathname} = useLocation();
 const navigate = useNavigate();
 const handleClick = ({index,path})=>{
   setCurrentIndex(index)
   navigate(path)
 }
  return (
    <ul>
        {
          menuItems.map(({title,path},index)=>{
            return(
            <li key={index} className={`mb-2 p-2 rounded-md hover:bg-primary hover:text-white ${currentIndex===index || pathname === path ? 'bg-primary text-white' : ''}`}
            onClick={()=>handleClick({index,path})}>
             <Link to={path}>{title}</Link>
            </li>
            )
          })
        }
    </ul>
  )
}

export default Navigation