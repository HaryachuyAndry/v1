import React from "react";
import Charts_content_style from "./charts_content.module.css";

const ChartsContent = () =>{
    return(
        
        <div className={Charts_content_style.Charts_container}>
            <div className = {Charts_content_style.dey}>День</div>
            <div className = {Charts_content_style.week}>Тиждень</div>
            <div className = {Charts_content_style.month}>Місяць</div>
            <div className = {Charts_content_style.year}>Рік</div>
            <div className = {Charts_content_style.energi}>Електро енергія</div>
            <div className = {Charts_content_style.gas}>Газ</div>
            <div className = {Charts_content_style.chart}>Графік</div>
        </div>
    );
}
export default ChartsContent; 
