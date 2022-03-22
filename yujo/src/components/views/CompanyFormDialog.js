import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import BusinessIcon from "@mui/icons-material/Business";
import AddIcon from "@mui/icons-material/Add";
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Item} from "semantic-ui-react";
import {useEffect} from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CompanyFormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [isNew, setIsNew] = React.useState(true);
    const [cif, setCIF] =  React.useState('');
    const [name, setName] =  React.useState('');
    const [address, setAddress] =  React.useState('');

    const reset = () => {
        if (isNew) {
            setCIF('');
        }
        setName('');
        setAddress('');
    };

    useEffect(() => {
        if (props.open !== undefined && !props.isButton) {
            setOpen(props.open);
        }
    }, [props.open]);


    useEffect(() => {
        if (props.company) {
            setIsNew(false);
            setCIF(props.company.cif);
            setName(props.company.name);
            setAddress(props.company.address);
        }
    }, [props.company]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSave = () => {
        props.onSave({
            cif: cif,
            name: name,
            address: address,
        });

        if (isNew) {
            reset();
        }

        if (props.isButton) {
            setOpen(false);
        }
    };

    const handleClose = () => {
        if (isNew) {
            reset();
        }

        if (props.isButton) {
            setOpen(false);
        } else {
            props.onCancel();
        }
    };

    return (
        <div>
            {props.isButton &&
                <Button startIcon={<AddIcon />} endIcon={<BusinessIcon />} variant="outlined" onClick={handleClickOpen}>
                    Add company
                </Button>
            }
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                maxWidth='xl'
            >
                <DialogTitle>{isNew && 'Add new company'}{!isNew && 'Update company - ' + cif}</DialogTitle>
                <DialogContent style={{paddingTop: 10}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item>
                                <TextField
                                    label={'CIF'}
                                    fullWidth
                                    value={cif}
                                    onChange={event => setCIF(event.target.value)}
                                    disabled={!isNew}
                                    InputProps={{
                                        readOnly: !isNew,
                                    }}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><TextField label={'Name'} fullWidth value={name} onChange={event => setName(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><TextField label={'Address'} fullWidth value={address} onChange={event => setAddress(event.target.value)} /></Item>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    {isNew && <Button onClick={reset}>Reset</Button>}
                    <Button onClick={handleClose} color='error'>Cancel</Button>
                    <Button onClick={handleSave} color='success'>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
