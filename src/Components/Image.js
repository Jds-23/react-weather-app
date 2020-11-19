import React,{useState} from "react";
import {Icon} from "rsuite";

const Image=(props)=>{
    const [imgStyle,setImgStyle]=useState({
        display: "none"
    });
    const [boxStyle,setBoxStyle]=useState({
        display: "flex",
        height: props.width+"px",
        width: props.height+"px",
        backgroundColor:"#f0f0f0",
        justifyContent:"center",
        alignItems:"center"
    });
    const loadImage=()=>{
        setImgStyle({
            display: "block"
        });
        setBoxStyle({
            display: "none",
        })
    }
    return(
        <>
            <img alt={props.alt} src={props.src} onLoad={loadImage} style={imgStyle}
                 width={props.width} height={props.height}/>
            <div style={boxStyle}><Icon icon="image"/></div>
        </>
    )
}
export default Image;