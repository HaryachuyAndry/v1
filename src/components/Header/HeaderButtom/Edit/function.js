
import Edit_style from './../../../Content/Edit/Edit_style.module.css'
export let HideEditMenu = () =>{
    let x = document.getElementsByClassName(Edit_style.Edit)
    if (x[0].style.display === 'grid'){
        x[0].style.display = 'none';
    }
    else{x[0].style.display = 'grid'};
}