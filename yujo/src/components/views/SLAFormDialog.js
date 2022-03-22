import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ArticleIcon from "@mui/icons-material/Article";
import AddIcon from "@mui/icons-material/Add";
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Item} from "semantic-ui-react";
import {useEffect} from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SLAFormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [isNew, setIsNew] = React.useState(true);
    const [id, setID] =  React.useState('');
    const [customer, setCustomer] =  React.useState('');
    const [company, setCompany] =  React.useState('');
    const [price, setPrice] =  React.useState('');

    const reset = () => {
        if (isNew) {
            setID('');
        }
        setCustomer('');
        setCompany('');
        setPrice('');
    };

    useEffect(() => {
        if (props.open !== undefined && !props.isButton) {
            setOpen(props.open);
        }
    }, [props.open]);


    useEffect(() => {
        if (props.sla) {
            setIsNew(false);
            setID(props.sla.id);
            setCustomer(props.sla.customer);
            setCompany(props.sla.company);
            setPrice(props.sla.price);
        }
    }, [props.sla]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSave = () => {
        props.onSave({
            id: id,
            customer: customer,
            company: company,
            price: price,
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

    let indexOfCustomer = props.customers.findIndex(_customer => _customer.ethAddress === customer);
    if (indexOfCustomer === -1) {
        indexOfCustomer = '';
    }

    let indexOfCompany = props.companies.findIndex(_company => _company.cif === company);
    if (indexOfCompany === -1) {
        indexOfCompany = '';
    }

    return (
        <div>
            {props.isButton &&
                <Button startIcon={<AddIcon />} endIcon={<ArticleIcon />} variant="outlined" onClick={handleClickOpen}>
                    Add SLA
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
                <DialogTitle>{isNew && 'Add new SLA'}{!isNew && 'Update SLA - ' + id}</DialogTitle>
                <DialogContent style={{paddingTop: 10}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item>
                                <TextField
                                    label={'ID'}
                                    fullWidth
                                    value={id}
                                    onChange={event => setID(event.target.value)}
                                    disabled={!isNew}
                                    InputProps={{
                                        readOnly: !isNew,
                                    }}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='customer-select'>Customer</InputLabel>
                                    <Select
                                        labelId='customer-select'
                                        label={'Customer'}
                                        fullWidth
                                        value={indexOfCustomer}
                                        onChange={event => setCustomer(props.customers[event.target.value].ethAddress)}
                                    >
                                        {props.customers.map((_customer, index) => <MenuItem key={index} value={index}>{_customer.ethAddress + ' (' + _customer.dni + ' - ' + _customer.surname + ')'}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><TextField label={'Price'} fullWidth value={price} onChange={event => setPrice(event.target.value)} /></Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='company-select'>Company</InputLabel>
                                    <Select
                                        labelId='company-select'
                                        label={'Company'}
                                        fullWidth
                                        value={indexOfCompany}
                                        onChange={event => setCompany(props.companies[event.target.value].cif)}
                                    >
                                        {props.companies.map((_company, index) => <MenuItem key={index} value={index}>{_company.cif + ' (' + _company.name + ')'}</MenuItem>)}
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
