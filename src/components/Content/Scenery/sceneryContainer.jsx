import React from 'react';
import Scenery from './scenery';
import { connect } from 'react-redux';
import {outSceneryelement1 , outSceneryelement2} from '../../../store/Content/scenery/actions'
import { bindActionCreators } from 'redux';


const SceneryContainer = (props) =>{
    console.log(props);
    return( 
        <Scenery 
            element1={props.element1} 
            element2={props.element2} 
            
            outSceneryelement1={props.outSceneryelement1} 
            outSceneryelement2={props.outSceneryelement2} //питання чому не полужається викристати the.
         >
        
        </Scenery> );  
}

const mapStateToProps = state => {            //ми запхали в пропси тупої компоненти поточний стейт
    return {
        element1: state.scenary.element1,
        element2: state.scenary.element2
    };
};

const putActionsToProps = (dispatch) => {       //ми зробили звязок між екшенкріейтерами та тупою компонентою
    return{
        outSceneryelement1: bindActionCreators(outSceneryelement1, dispatch),
        outSceneryelement2: bindActionCreators(outSceneryelement2, dispatch),
    }
};

export default connect (mapStateToProps,putActionsToProps)(SceneryContainer); 