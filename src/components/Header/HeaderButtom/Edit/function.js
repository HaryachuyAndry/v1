
import Edit_style from './../../../Content/Edit/Edit_style.module.css'
export let HideEditMenu = () =>{
    let x = document.getElementsByClassName(Edit_style.Edit)
    if (x[0].style.display === 'none'){
        x[0].style.display = 'block';
    }
    else{x[0].style.display = 'none'};
}