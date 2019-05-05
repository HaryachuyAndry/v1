import React, { Component } from 'react';
import { connect } from 'react-redux';
import Room from './ListRoom/Room/room';

import listRoomStyle from './ListRoom/ListRoom.module.css';
import HeaderButtomStyle from './HeaderButtom.module.css';
import Edit from './Edit/Edit';

class HeaderButtom extends Component {
  render() {
    return (
      <div className={HeaderButtomStyle.HeadButtom}>
        <div className={listRoomStyle.listroom}>
          {this.props.listroom.map(r => <Room key={r.id} id={r.id} nameRoom={r.name} />)}
        </div>
        <Edit  />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listroom: state.rooms.rooms,
  countOfRooms: state.rooms.rooms.length,
});

export default connect(mapStateToProps)(HeaderButtom);
