import React from 'react';
import image1 from './img/room1.jpg';
import image2 from './img/room2.jpg';
import image3 from './img/room3.jpg';

const a = () =>{
    return(
        <div>
            <img src={image1} alt="s"/>
        </div>
    );
}
const b = () =>{
    return(
        <div>
            <img src={image2}alt="s"/>
        </div>
    );
}
const c = () =>{
    return(
        <div>
            <img src={image3}alt="s"/>
        </div>
    );
}



let dataRoom = [
    {path: "/1", nameImg:a},
    {path: "/2", nameImg:b},
    {path: "/3", nameImg:c}
]
export let roomData = [
    {id: 1, nameRoom: "кімната 1"},
    {id: 2, nameRoom: "кімната 2"},
    {id: 3, nameRoom: "кімната 3"},
    {id: 4, nameRoom: "кімната 4"},
    {id: 5, nameRoom: "кімната 5"},
];

export let Addroom = () => {
    dataRoom.push({path:"/4",nameImg:""});
} 

export let buttonEdit = () => {
    alert("HI");
}

export default dataRoom;