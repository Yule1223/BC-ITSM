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
import {useTranslation} from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SLAFormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [id, setID] =  React.useState('');
    const [customer, setCustomer] =  React.useState('');
    const [company, setCompany] =  React.useState('');
    const [price, setPrice] =  React.useState('');
    const { t } = useTranslation();

    useEffect(() => {
        if (props.open !== undefined && !props.isButton) {
            setOpen(props.open);
        }
    }, [props.open]);


    useEffect(() => {
        if (props.sla) {
            setID(props.sla.id);
            setCustomer(props.sla.customer);
            setCompany(props.sla.company);
            setPrice(props.sla.price);
        }
    }, [props.sla]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.onClose();
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
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                maxWidth='xl'
            >
                <DialogTitle>{t('slaForm.title') + ' - ' + id}</DialogTitle>
                <DialogContent style={{paddingTop: 10}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item>
                                <TextField
                                    label={t('slaForm.id')}
                                    fullWidth
                                    value={id}
                                    disabled
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='customer-select'>{t('slaForm.customer')}</InputLabel>
                                    <Select
                                        labelId='customer-select'
                                        label={t('slaForm.customer')}
                                        fullWidth
                                        value={indexOfCustomer}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {props.customers.map((_customer, index) => <MenuItem key={index} value={index}>{_customer.ethAddress + ' (' + _customer.dni + ' - ' + _customer.surname + ')'}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <TextField
                                    label={t('slaForm.price')}
                                    fullWidth
                                    value={price}
                                    disabled
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='company-select'>{t('slaForm.company')}</InputLabel>
                                    <Select
                                        labelId='company-select'
                                        label={t('slaForm.company')}
                                        fullWidth
                                        value={indexOfCompany}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {props.companies.map((_company, index) => <MenuItem key={index} value={index}>{_company.cif + ' (' + _company.name + ')'}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='info'>{t('form.closeButton')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
