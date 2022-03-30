import * as React from 'react';
import {
    createMuiTheme,
    createTheme, CssBaseline,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ThemeProvider
} from "@mui/material";
import {Item} from "semantic-ui-react";
import {countries} from "../../config";
import {useTranslation} from "react-i18next";

export default function CustomerForm(props) {
    const { t } = useTranslation();

    const theme = createTheme({
        palette: {
            mode: props.darkMode ? 'dark' : 'light',
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container rowSpacing={2} spacing={2} >
                <Grid item xs={4}>
                    <Item>
                        <TextField
                            label={t('customerForm.ethereumAddress')}
                            fullWidth
                            value={props.ethAddress}
                            onChange={event => props.setEthAddress ? props.setEthAddress(event.target.value) : undefined}
                            disabled={props.ethAddressDisabled}
                            InputProps={{
                                readOnly: props.ethAddressReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <TextField
                            label={t('customerForm.dni')}
                            fullWidth
                            value={props.dni}
                            onChange={event => props.setDNI ? props.setDNI(event.target.value) : undefined}
                            disabled={props.dniDisabled}
                            InputProps={{
                                readOnly: props.dniReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <TextField
                            label={t('customerForm.firstName')}
                            fullWidth
                            value={props.firstName}
                            onChange={event => props.setFirstName ? props.setFirstName(event.target.value) : undefined}
                            disabled={props.firstNameDisabled}
                            InputProps={{
                                readOnly: props.firstNameReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <TextField
                            label={t('customerForm.lastName')}
                            fullWidth
                            value={props.lastName}
                            onChange={event => props.setLastName ? props.setLastName(event.target.value) : undefined}
                            disabled={props.lastNameDisabled}
                            InputProps={{
                                readOnly: props.lastNameReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <FormControl fullWidth>
                            <InputLabel id='gender-select'>{t('customerForm.genderChoose')}</InputLabel>
                            <Select
                                labelId='gender-select'
                                label={t('customerForm.genderChoose')}
                                fullWidth
                                value={props.gender}
                                onChange={event => props.setGender ? props.setGender(event.target.value) : undefined}
                                disabled={props.genderDisabled}
                                InputProps={{
                                    readOnly: props.genderReadOnly,
                                }}
                            >
                                <MenuItem value={0}>{t('customerForm.genderMale')}</MenuItem>
                                <MenuItem value={1}>{t('customerForm.genderFemale')}</MenuItem>
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <TextField
                            label={t('customerForm.email')}
                            fullWidth
                            value={props.email}
                            onChange={event => props.setEmail ? props.setEmail(event.target.value) : undefined}
                            disabled={props.emailDisabled}
                            InputProps={{
                                readOnly: props.emailReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <TextField
                            label={t('customerForm.phone')}
                            fullWidth
                            value={props.phone}
                            onChange={event => props.setPhone ? props.setPhone(event.target.value) : undefined}
                            disabled={props.phoneDisabled}
                            InputProps={{
                                readOnly: props.phoneReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <FormControl fullWidth>
                            <InputLabel id='company-select'>{t('customerForm.company')}</InputLabel>
                            <Select
                                labelId='company-select'
                                label={t('customerForm.company')}
                                fullWidth
                                value={props.company}
                                onChange={event => props.setCompany ? props.setCompany(event.target.value) : undefined}
                                disabled={props.companyDisabled}
                                InputProps={{
                                    readOnly: props.companyReadOnly,
                                }}
                            >
                                {props.companies.map((company) => <MenuItem key={company.cif} value={company.cif}>{company.cif} ({company.name})</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <TextField
                            label={t('customerForm.province')}
                            fullWidth
                            value={props.province}
                            onChange={event => props.setProvince ? props.setProvince(event.target.value) : undefined}
                            disabled={props.provinceDisabled}
                            InputProps={{
                                readOnly: props.provinceReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <TextField
                            label={t('customerForm.city')}
                            fullWidth
                            value={props.city}
                            onChange={event => props.setCity ? props.setCity(event.target.value) : undefined}
                            disabled={props.cityDisabled}
                            InputProps={{
                                readOnly: props.cityReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <FormControl fullWidth>
                            <InputLabel id='country-select'>{t('customerForm.country')}</InputLabel>
                            <Select
                                labelId='country-select'
                                label={t('customerForm.country')}
                                fullWidth
                                value={props.country}
                                onChange={event => props.setCountry ? props.setCountry(event.target.value) : undefined}
                                disabled={props.countryDisabled}
                                InputProps={{
                                    readOnly: props.countryReadOnly,
                                }}
                            >
                                {countries.map((country, index) => <MenuItem key={index} value={index}>{country.label}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
