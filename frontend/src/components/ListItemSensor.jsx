import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { Checkbox } from '@mui/material';

export default function ListItemSensor(props) {

    const [isSelected, setIsSelected] = React.useState(false);

    return (
            <ListItem sx={{
                backgroundColor: '#fafafa',
                height : '30px',
                borderRadius: '5px',
                marginBottom: '10px'
            }}>
                <Checkbox onChange={()=>{
                    props.setSensors(prev=>{
                        prev[props.sensor] = !isSelected;
                        let next = {...prev};
                        return next;
                    });
                    props.sensors[props.sensor] = !isSelected;
                    setIsSelected(!isSelected);
                    }}/>
                <ListItemText primary={props.text}/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    height:20,
                    width: 'max-content',
                    backgroundColor: 'yellow',
                    borderRadius: '5px'
                }}>{props.value}</div>
            </ListItem>
    )
}