import React from 'react'
import '../TinderCard.css'
import ReplyIcon from '@material-ui/icons/Reply';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


export default function SwipButton() {
    return (
        <div className="swipbutton">

            <IconButton className="swipbutton__repeat"><ReplyIcon fontSize="large"/></IconButton>
            <IconButton className="swipbutton__left">  <CancelRoundedIcon fontSize="large"/></IconButton>
            <IconButton className="swipbutton__star">  <StarRateIcon fontSize="large"/></IconButton>
            <IconButton className="swipbutton__right"><FavoriteIcon fontSize="large"/></IconButton>
            <IconButton className="swipbutton__lightining"> <FlashOnIcon fontSize="large"/></IconButton>
                      
          
           
            
            
        </div>
    )
}
