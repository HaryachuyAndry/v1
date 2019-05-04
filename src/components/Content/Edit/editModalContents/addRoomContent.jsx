import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default class AddRoomContent extends Component {
  state = {
    room: '',
  };

  render() {
    return (
      <div>
        <DialogTitle id="form-dialog-title">Create room?</DialogTitle>
        <p />
        <TextField
          autoFocus
          margin="dense"
          defaultValue={this.state.room}
          id="name"
          onInput={e => this.props.change(e.target.value)}
          label="New room name"
          fullWidth
        />
      </div>);
  }
}
