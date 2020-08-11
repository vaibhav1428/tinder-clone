import React from 'react';
import "../Header.css";
import IconButton from '@material-ui/core/IconButton';
import { Link,useHistory } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';


export default function Header({backButton}) {
const history = useHistory();



    return (
        <div className="Header">


            {backButton?(
                <IconButton ClassName="Header_back" onClick={()=>history.replace(backButton)}>
              <ArrowBackRoundedIcon fontSize="large" ClassName="header_back Header_icon"/>
              </IconButton>
            
              )
              :
              (
            <IconButton ClassName="header_icon_left">
            <img src="../images/profile.png" className="header__logo Header_icon"  alt="tinder logo"/>
            </IconButton>
            )
            
            }
         

            <Link to="/">

            <IconButton>
            <img src="../images/heart.png" className="header__logo Header_icon"  alt="tinder logo"/>
            </IconButton>
            </Link>


            <Link to="/chat">
            <IconButton ClassName="header_icon_right">
            <img src="../images/message.png" className="header__logo Header_icon"  alt="tinder logo"/>
            </IconButton>
            </Link>
        </div>


    )
}
