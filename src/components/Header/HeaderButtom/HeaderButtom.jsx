import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderButtomStyle from './HeaderButtom.module.css';
import ListRoom from './ListRoom/ListRoom';
import Edit from './Edit/Edit';

class HeaderButtom extends Component {
  render() {
    return (
      <div className={HeaderButtomStyle.HeadButtom}>
        <ListRoom roomData={this.props.listroom} />
        <Edit buttonEdit={this.props.buttonEdit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listroom: state.rooms.rooms,
});
export default connect(mapStateToProps)(HeaderButtom);
