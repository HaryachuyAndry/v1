import React from 'react';
import Scenery from './scenery';
import { connect } from 'react-redux';
import {outSceneryelement1 , outSceneryelement2} from '../../../store/Content/scenery/actions'


const SceneryContainer = (props) =>{
    console.log(props);
    return( <Scenery 
        element1={props.element1} 
        element2={props.element2} 
        
        //outSceneryelement1={this.props.outSceneryelement1} 
        //outSceneryelement2={this.props.outSceneryelement2}
         >
        
        </Scenery> );  
}

const mapStateToProps = state => {
    return {
        element1: state.scenary.element1,
        element2: state.scenary.element2
    };
};

const mapDispachToProps = {
    outSceneryelement1:outSceneryelement1,
    outSceneryelement2:outSceneryelement2
};

export default connect (mapStateToProps,mapDispachToProps)(SceneryContainer); 