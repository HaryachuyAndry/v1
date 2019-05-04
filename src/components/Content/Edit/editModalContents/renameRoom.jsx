import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default class RenameRoomContent extends Component {
  state = {
    openSelect: false,
    room: '',
  };

  handleSelectClose = () => {
    this.setState({ openSelect: false });
  };

  handleSelectOpen = () => {
    this.setState({ openSelect: true });
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <DialogTitle id="form-dialog-title">Rename room?</DialogTitle>
        <FormControl style={{ width: '100%', marginTop: '30px' }}>
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
              <MenuItem ket={r.id} value={r.name}>{r.name}</MenuItem>
          ))
          }
          </Select>
        </FormControl>
        <p />
        {
          this.state.room && <TextField
            autoFocus
            margin="dense"
            defaultValue={this.state.room}
            id="name"
            label="new room name"
            fullWidth
          />}
      </div>);
  }
}
