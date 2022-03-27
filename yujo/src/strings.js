import LocalizedStrings from 'react-localization';
import spanish from "./translations/es";
import english from "./translations/en";

const strings = new LocalizedStrings({
    en: english,
    es: spanish,
});

const languages = [
    {key: 'en'},
    {key: 'es'},
];

export {strings, languages};
