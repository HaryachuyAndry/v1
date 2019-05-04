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
import addRoom from './imgEdit/add_room.png';
import deleteRoom from './imgEdit/delete_room.png';
import editImgRoom from './imgEdit/edit_img_room.png';
import renameRoom from './imgEdit/rename_room.png';
import Edit_style from './Edit_style.module.css';

class EditSet extends React.Component {
  state = {
    open: false,
    selectedModalType: '',
  };

  handleClickOpen = (type) => {
    this.setState({ open: true, selectedModalType: type });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { selectedModalType } = this.state;
    // const selectedModalType = this.state.selectedModalType
    return (
      <div>
        <div className={Edit_style.Edit} >
          <img src={addFile} alt="" onClick={() => this.handleClickOpen('add-device')} className={Edit_style.icon} />
          <img src={addRoom} alt="" onClick={() => this.handleClickOpen('add-room')}className={Edit_style.icon} />
          <img src={deleteRoom} alt="" onClick={() => this.handleClickOpen('delete-room')}className={Edit_style.icon} />
          <img src={editImgRoom} alt="" onClick={() => this.handleClickOpen('edit-image')}className={Edit_style.icon} />
          <img src={renameRoom} alt="" onClick={() => this.handleClickOpen('edit-room')}className={Edit_style.icon} />
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
              { selectedModalType === 'add-room' && <AddRoomContent />}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
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

export default connect(mapStateToProps)(EditSet);


// import React from 'react';


// const EditSet = props => (
//   <div className={Edit_style.Edit} >
//     <img src={addFile} alt="" onClick={props.Addroom} className={Edit_style.icon} />
//     <img src={addRoom} alt="" onClick={props.Addroom}className={Edit_style.icon} />
//     <img src={deleteRoom} alt="" onClick={props.Addroom}className={Edit_style.icon} />
//     <img src={editImgRoom} alt="" onClick={props.Addroom}className={Edit_style.icon} />
//     <img src={renameRoom} alt="" onClick={props.Addroom}className={Edit_style.icon} />
//   </div>
// );

// export default EditSet;
