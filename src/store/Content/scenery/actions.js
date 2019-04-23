export const SCEN_CHANGE_ELEMENT1 = 'SCEN_CHANGE_ELEMENT1'; 
export const SCEN_CHANGE_ELEMENT2 = 'SCEN_CHANGE_ELEMENT2'; 

export const outSceneryelement1 = (element1) =>({
    type: SCEN_CHANGE_ELEMENT1,
    payload: element1   //те що приходить з вюшки
});

export const outSceneryelement2 = (element2) =>({
    type: SCEN_CHANGE_ELEMENT2,
    payload: element2
});