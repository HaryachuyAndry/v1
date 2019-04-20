const defoualtstate ={
      element1: 'поле 1',
      element2:'поле 2'
};

export const seneryOutput = (state = defoualtstate , action ) => {
     switch(action.type){
            case SCEN_CHANGE_ELEMENT1:
                return{
                    ...state , 
                    element1 : action.payload                };

            case SCEN_CHANGE_ELEMENT2:
                return{
                    ...state , 
                    element2 : action.payload                };
    }
     return state;
}