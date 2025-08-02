
import React from 'react';
import './App.css';
import img from './img.png';

const Office =()=>{
    const element = "Office Space";
    const jsxatt = <img src={img} alt="Office Space" />;
    const ItemName = {
        Name:"DBS",
        Rent:50000,
        Address:"Chennai"
    }
    let colors=[];
    if(ItemName.Rent<=60000){
        colors.push('textRed');
    }else{
        colors.push('textGreen');
    }
    return(
        <>
        <h1>{element}, at Affordable Range</h1>
        <div style={{height:"200px",width:"200px"}}>{jsxatt}</div>
        <h1>Name: {ItemName.Name}</h1>
        <h3 className={colors[0]}>Rent Rs: {ItemName.Rent}</h3>
        <h3>Address: {ItemName.Address}</h3>
        </>
    )
}

export default Office;