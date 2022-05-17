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
import {getStringFromConstantValue, slinkConfig} from "../../config";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SLAFormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [id, setID] =  React.useState('');
    const [customer, setCustomer] =  React.useState('');
    const [company, setCompany] =  React.useState('');
    const [price, setPrice] =  React.useState('');
    const [automaticRenewal, setAutomaticRenewal] =  React.useState(false);
    const [serviceIndex, setServiceIndex] =  React.useState(0);
    const [extraServiceIndex, setExtraServiceIndex] =  React.useState(0);
    const [serviceSpaceIndex, setServiceSpaceIndex] =  React.useState(0);
    const [licenseIndex, setLicenseIndex] =  React.useState(0);
    const [revisionReportIndex, setRevisionReportIndex] =  React.useState(0);
    const [billingIndex, setBillingIndex] =  React.useState(0);
    const [billingMethodIndex, setBillingMethodIndex] =  React.useState(0);
    const { t, i18n } = useTranslation();

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
            setAutomaticRenewal(props.sla.automaticRenewal);
            setServiceIndex(slinkConfig.services.findIndex(item => item.id === props.sla.serviceId));
            setExtraServiceIndex(slinkConfig.extraServices.findIndex(item => item.id === props.sla.extraServiceId));
            setServiceSpaceIndex(slinkConfig.serviceSpaces.findIndex(item => item.id === props.sla.serviceSpaceId));
            setLicenseIndex(slinkConfig.licences.findIndex(item => item.id === props.sla.licenseId));
            setRevisionReportIndex(slinkConfig.revisionReports.findIndex(item => item.id === props.sla.revisionReportId));
            setBillingIndex(slinkConfig.billings.findIndex(item => item.id === props.sla.billingId));
            setBillingMethodIndex(slinkConfig.billingMethods.findIndex(item => item.id === props.sla.billingMethodId));
            console.log(props.sla);
        }
    }, [props.sla]);

    const slinkConfigWithTranslate = JSON.parse(JSON.stringify(slinkConfig));

    slinkConfigWithTranslate.serviceSpaces.map(serviceSpace => serviceSpace.name = serviceSpace.name[i18n.language]);
    slinkConfigWithTranslate.services.map(service => {
        service.name = service.name[i18n.language];
        service.description = service.description[i18n.language];
    });
    slinkConfigWithTranslate.extraServices.map(service => {
        service.name = service.name[i18n.language];
        service.description = service.description[i18n.language];
    });
    slinkConfigWithTranslate.licences.map(license => license.name = license.name[i18n.language]);
    slinkConfigWithTranslate.serviceLeves = slinkConfig.serviceLeves[i18n.language];
    slinkConfigWithTranslate.billingMethods.map(billingMethod => billingMethod.name = billingMethod.name[i18n.language]);

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
                        <Grid item xs={2}>
                            <Item>
                                <FormControlLabel disabled control={<Switch defaultChecked={automaticRenewal} />} label={t('slaForm.autoRenewal')} labelPlacement='start' />
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
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
                        <Grid item xs={4}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='service-select'>{t('slaForm.coveredServices')}</InputLabel>
                                    <Select
                                        labelId='service-select'
                                        label={t('slaForm.coveredServices')}
                                        fullWidth
                                        value={serviceIndex}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {slinkConfigWithTranslate.services.map((item, index) => <MenuItem key={index} value={index}>{item.name}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='extra-service-select'>{t('slaForm.extraServices')}</InputLabel>
                                    <Select
                                        labelId='extra-service-select'
                                        label={t('slaForm.extraServices')}
                                        fullWidth
                                        value={extraServiceIndex}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {slinkConfigWithTranslate.extraServices.map((item, index) => <MenuItem key={index} value={index}>{item.name}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='service-space-select'>{t('slaForm.serviceHours')}</InputLabel>
                                    <Select
                                        labelId='service-spcae-select'
                                        label={t('slaForm.serviceHours')}
                                        fullWidth
                                        value={serviceSpaceIndex}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {slinkConfigWithTranslate.serviceSpaces.map((item, index) => <MenuItem key={index} value={index}>{item.name + ' (' + item.startTime + '-' + item.endTime + ')'}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='license-select'>{t('slaForm.licences')}</InputLabel>
                                    <Select
                                        labelId='license-select'
                                        label={t('slaForm.licences')}
                                        fullWidth
                                        value={licenseIndex}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {slinkConfigWithTranslate.licences.map((item, index) => <MenuItem key={index} value={index}>{item.name}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='revision-report-select'>{t('slaForm.assuranceReportPeriod')}</InputLabel>
                                    <Select
                                        labelId='revision-report-select'
                                        label={t('slaForm.assuranceReportPeriod')}
                                        fullWidth
                                        value={revisionReportIndex}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {slinkConfigWithTranslate.revisionReports.map((item, index) => {
                                            const periodicity = getStringFromConstantValue(item.pricePeriodicity, t);
                                            return <MenuItem key={index} value={index}>{periodicity.charAt(0).toUpperCase() + periodicity.slice(1)}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='billing-select'>{t('slaForm.assuranceServiceBillingPeriod')}</InputLabel>
                                    <Select
                                        labelId='billing-select'
                                        label={t('slaForm.assuranceServiceBillingPeriod')}
                                        fullWidth
                                        value={billingIndex}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {slinkConfigWithTranslate.billings.map((item, index) => {
                                            const periodicity = getStringFromConstantValue(item.periodicity, t);
                                            return <MenuItem key={index} value={index}>{periodicity.charAt(0).toUpperCase() + periodicity.slice(1)}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id='billing-method-select'>{t('slaForm.assuranceBillingMethod')}</InputLabel>
                                    <Select
                                        labelId='billing-method-select'
                                        label={t('slaForm.assuranceBillingMethod')}
                                        fullWidth
                                        value={billingMethodIndex}
                                        disabled
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        {slinkConfigWithTranslate.billingMethods.map((item, index) => <MenuItem key={index} value={index}>{item.name}</MenuItem>)}
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
