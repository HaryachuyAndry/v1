import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import RemoveRoomContent from './editModalContents/removeRoom';
import RenameRoomContent from './editModalContents/renameRoom';
import AddRoomContent from './editModalContents/addRoomContent';

import addFile from './imgEdit/add_elemets.png';
import addRoomIcon from './imgEdit/add_room.png';
import deleteRoom from './imgEdit/delete_room.png';
import editImgRoom from './imgEdit/edit_img_room.png';
import renameRoom from './imgEdit/rename_room.png';
import EditStyle from './Edit_style.module.css';
import { addRoomAction } from '../../../store/rooms/actions';

class EditSet extends React.Component {
  state = {
    open: false,
    selectedModalType: '',
    roomName: '',
  };

  handleClickOpen = (type) => {
    this.setState({ open: true, selectedModalType: type });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addRoomHandler = (name) => {
    this.setState({ roomName: name });
  }

  submitModal = () => {
    this.handleClose();
    if (this.state.selectedModalType === 'add-room') { this.props.addRoomAction(this.state.roomName); }
  }

  render() {
    const { selectedModalType } = this.state;
    // const selectedModalType = this.state.selectedModalType
    return (
      <div>
        <div className={EditStyle.Edit} >
          <img src={addFile} alt="" onClick={() => this.handleClickOpen('add-device')} className={EditStyle.icon} />
          <img src={addRoomIcon} alt="" onClick={() => this.handleClickOpen('add-room')}className={EditStyle.icon} />
          <img src={deleteRoom} alt="" onClick={() => this.handleClickOpen('delete-room')}className={EditStyle.icon} />
          <img src={editImgRoom} alt="" onClick={() => this.handleClickOpen('edit-image')}className={EditStyle.icon} />
          <img src={renameRoom} alt="" onClick={() => this.handleClickOpen('edit-room')}className={EditStyle.icon} />
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
          <DialogContent>
            <DialogContentText>
              { selectedModalType === 'delete-room' && <RemoveRoomContent rooms={this.props.rooms} />}
              { selectedModalType === 'edit-room' && <RenameRoomContent rooms={this.props.rooms} />}
              { selectedModalType === 'add-room' && <AddRoomContent change={this.addRoomHandler} />}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitModal} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms.rooms,
});

const mapDispatchToProps = {
  addRoomAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSet);
