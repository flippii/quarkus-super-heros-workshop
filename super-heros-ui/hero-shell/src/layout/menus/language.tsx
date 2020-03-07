import * as React from 'react';
import { useDynamicLanguage, useTranslate, LanguagesPickerProps } from 'piral';
import { loadLanguage } from '../../language/language';
import { NavDropdown } from "./menu-components";
import { DropdownItem } from 'reactstrap';

export const LanguagePicker: React.FC<LanguagesPickerProps> = ({ selected, available }) => {
  const [language, setLanguage] = useDynamicLanguage(selected, loadLanguage);
  const translate = useTranslate();

  return (
    <NavDropdown icon="fa fa-flag"
                 name={language ? translate(language) : undefined}>

      {available.map(lang => (
        <DropdownItem key={lang} value={lang} onClick={() => setLanguage(lang)}>
          {translate(lang)}
        </DropdownItem>
      ))}
    </NavDropdown>
  );
};
