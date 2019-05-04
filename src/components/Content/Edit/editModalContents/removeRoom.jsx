import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class RemoveRoomContent extends Component {
  state = {
    openSelect: false,
    room: 0,
  };

  handleSelectClose = () => {
    this.setState({ openSelect: false });
  };

  handleSelectOpen = () => {
    this.setState({ openSelect: true });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <DialogTitle id="form-dialog-title">Delete room?</DialogTitle>
        <p>If you.....</p>
        <FormControl style={{ width: '100%' }}>
          <InputLabel htmlFor="demo-controlled-open-select" className="mb-4">Room name</InputLabel>
          <Select
            open={this.state.openSelect}
            onClose={this.handleSelectClose}
            onOpen={this.handleSelectOpen}
            value={this.state.room}
            onChange={this.handleChange}
            inputProps={{
              name: 'room',
              id: 'demo-controlled-open-select',
            }}
          >
            {this.props.rooms.map(r => (
              <MenuItem value={r.id}>{r.name}</MenuItem>
          ))
          }
          </Select>
        </FormControl>
      </div>);
  }
}
