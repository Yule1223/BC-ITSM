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
import {useTranslation} from "react-i18next";
import CompanyForm from "./CompanyForm";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CompanyFormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [isNew, setIsNew] = React.useState(true);
    const [cif, setCIF] =  React.useState('');
    const [name, setName] =  React.useState('');
    const [address, setAddress] =  React.useState('');
    const { t } = useTranslation();

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
                    {t('companyForm.addTitle')}
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
                <DialogTitle>{isNew && t('companyForm.addTitle')}{!isNew && t('companyForm.updateTitle') + ' - ' + cif}</DialogTitle>
                <DialogContent style={{paddingTop: 10}}>
                    <CompanyForm
                        cif={cif}
                        setCIF={setCIF}
                        cifDisabled={!isNew}
                        cifReadOnly={!isNew}

                        name={name}
                        setName={setName}

                        address={address}
                        setAddress={setAddress}

                    />
                </DialogContent>
                <DialogActions>
                    {isNew && <Button onClick={reset}>{t('form.resetButton')}</Button>}
                    <Button onClick={handleClose} color='error'>{t('form.cancelButton')}</Button>
                    <Button onClick={handleSave} color='success'>{t('form.saveButton')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
