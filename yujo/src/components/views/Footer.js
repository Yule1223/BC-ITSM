import {
    BottomNavigation,
    BottomNavigationAction, Box,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {languages} from "../../translations/translationConfig";

function Footer() {
    const {t, i18n} = useTranslation();

    return (
        <div className='bg-info p-2 row justify-content-end'>
            <Box className='col-2'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{t('footer.languages.selectLanguageTitle')}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={i18n.language}
                        label={t('footer.languages.selectLanguageTitle')}
                        onChange={(event) => i18n.changeLanguage(event.target.value)}
                    >
                        {languages.map(language => <MenuItem value={language}>{t('footer.languages.' + language)}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default Footer;
