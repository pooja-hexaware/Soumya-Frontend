import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Checkbox } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopping } from './Topping.action';

 function SimpleDialog(props) {
  const dispatch = useDispatch();
  const toppings = useSelector((state) => state.Topping.toppings.toppings);

  useEffect(() => {
    dispatch(fetchTopping());
  }, []);

  useEffect(() => {

    console.log(toppings)

  }, [toppings]);
  const { onClose, open } = props;
const [selectedValue,setSelectedValue]=useState([])
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    setSelectedValue(value.price);
  };
  console.log("selected value",selectedValue.price);
  const handleClick=()=>{
    
  }
  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      
      <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
        {toppings?.map((data) => (
          <ListItem button  key={data}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }} src={data.img}>
               
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.name} secondary={data.price}/>
            <Checkbox onClick={() => handleListItemClick(data)}/>
          </ListItem>
        ))}

        
      </List>
     <Button onClick={() => handleClick()}>Add</Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Toppingcard(toppings) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(toppings[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1" component="div">
        Selected: {selectedValue.name}
      </Typography> */}
      <br />
    
      <Button variant="contained"  onClick={handleClickOpen} startIcon={<ControlPointIcon />}>
  toppings
</Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}