import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Item} from "semantic-ui-react";
import {useEffect} from "react";
import {countries} from "../../config";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomerFormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [isNew, setIsNew] = React.useState(true);
    const [ethAddress, setEthAddress] =  React.useState('');
    const [dni, setDNI] =  React.useState('');
    const [name, setName] =  React.useState('');
    const [surname, setSurname] =  React.useState('');
    const [gender, setGender] =  React.useState('');
    const [email, setEmail] =  React.useState('');
    const [phone, setPhone] =  React.useState('');
    const [province, setProvince] =  React.useState('');
    const [city, setCity] =  React.useState('');
    const [country, setCountry] =  React.useState('');

    const reset = () => {
        if (isNew) {
            setEthAddress('');
        }
        setDNI('');
        setName('');
        setSurname('');
        setGender('');
        setEmail('');
        setPhone('');
        setProvince('');
        setCity('');
        setCountry('');
    };

    useEffect(() => {
        if (props.open !== undefined && !props.isButton) {
            setOpen(props.open);
        }
    }, [props.open]);


    useEffect(() => {
        if (props.customer) {
            setIsNew(false);
            setEthAddress(props.customer.ethAddress);
            setDNI(props.customer.dni);
            setName(props.customer.name);
            setSurname(props.customer.surname);
            setGender(props.customer.gender);
            setEmail(props.customer.email);
            setPhone(props.customer.phone);
            setProvince(props.customer.province);
            setCity(props.customer.city);
            setCountry(props.customer.country);
        }
    }, [props.customer]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSave = () => {
        props.onSave({
            ethAddress: ethAddress,
            dni: dni,
            name: name,
            surname: surname,
            gender: gender,
            email: email,
            phone: phone,
            province: province,
            city: city,
            country: country,
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
                <Button startIcon={<AddIcon />} endIcon={<PersonIcon />} variant="outlined" onClick={handleClickOpen}>
                    Add customer
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
                <DialogTitle>{isNew && 'Add new customer'}{!isNew && 'Update customer - ' + ethAddress}</DialogTitle>
                <DialogContent style={{paddingTop: 10}}>
                    <Grid container rowSpacing={2} spacing={2}>
                        <Grid item xs={4}>
                            <Item>
                                <TextField
                                    label={'Ethereum address'}
                                    fullWidth
                                    value={ethAddress}
                                    onChange={event => setEthAddress(event.target.value)}
                                    disabled={!isNew}
                                    InputProps={{
                                        readOnly: !isNew,
                                    }}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item><TextField label={'DNI'} fullWidth value={dni} onChange={event => setDNI(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item><TextField label={'Name'} fullWidth value={name} onChange={event => setName(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item><TextField label={'Surname'} fullWidth value={surname} onChange={event => setSurname(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='gender-select'>Gender</InputLabel>
                                    <Select labelId='gender-select' label={'Gender'} fullWidth value={gender} onChange={event => setGender(event.target.value)}>
                                        <MenuItem value={0}>Male</MenuItem>
                                        <MenuItem value={1}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><TextField label={'Email'} fullWidth value={email} onChange={event => setEmail(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item><TextField label={'Phone'} fullWidth value={phone} onChange={event => setPhone(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><TextField label={'Province'} fullWidth value={province} onChange={event => setProvince(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><TextField label={'City'} fullWidth value={city} onChange={event => setCity(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='country-select'>Country</InputLabel>
                                    <Select labelId='country-select' label={'Country'} fullWidth value={country} onChange={event => setCountry(event.target.value)}>
                                        {countries.map((country, index) => <MenuItem key={index} value={index}>{country.label}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Item>
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
