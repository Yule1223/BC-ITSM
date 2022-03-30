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

export default function CompanyForm(props) {
    const { t } = useTranslation();

    const theme = createTheme({
        palette: {
            mode: props.darkMode ? 'dark' : 'light',
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <TextField
                            label={t('companyForm.cif')}
                            fullWidth
                            value={props.cif}
                            onChange={event => props.setCIF ? props.setCIF(event.target.value) : undefined}
                            disabled={props.cifDisabled}
                            InputProps={{
                                readOnly: props.cifReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <TextField
                            label={t('companyForm.name')}
                            fullWidth
                            value={props.name}
                            onChange={event => props.setName ? props.setName(event.target.value) : undefined}
                            disabled={props.nameDisabled}
                            InputProps={{
                                readOnly: props.nameReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <TextField
                            label={t('companyForm.direction')}
                            fullWidth
                            value={props.address}
                            onChange={event => props.setAddress ? props.setAddress(event.target.value) : undefined}
                            disabled={props.addressDisabled}
                            InputProps={{
                                readOnly: props.addressReadOnly,
                            }}
                        />
                    </Item>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
