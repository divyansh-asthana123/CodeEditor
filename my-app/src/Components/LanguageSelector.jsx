import React from 'react'
import {Box, Button, Text, Menu, MenuItem, MenuList, MenuButton} from '@chakra-ui/react';
import { LANGUAGE_VERSIONS } from '../constants.js';

function LanguageSelector({currentLanguage, onSelect}) {

    const ACTIVE_COLOR = "blue.400";
    const languages = Object.entries(LANGUAGE_VERSIONS);
    const activeLanguageColor = (currentLanguage, language) => {
        if(currentLanguage === language) return ACTIVE_COLOR
        else return "white"
    }
    const activeLanguageBackground = (currentLanguage, language) => {
        if(currentLanguage === language) return "gray.900"
        else return "transparent"
    }
    return (
        <>
            <Text mb="2vh" fontSize="18">Language: </Text>
            <Menu isLazy>
                <MenuButton as={Button} px ="2vh">
                    {currentLanguage} ({LANGUAGE_VERSIONS[currentLanguage]})
                </MenuButton>
                <MenuList>
                    {languages.map(([language, version]) => (
                        <MenuItem key={language} 
                        color={activeLanguageColor(currentLanguage,language)}
                        bg={activeLanguageBackground(currentLanguage, language)}
                        _hover={{
                            color: ACTIVE_COLOR,
                            bg: "gray.900"
                        }}
                        onClick = {() => onSelect(language)}>
                            {language} &nbsp;
                            <Text as="span" color="gray.600" fontSize="small">
                                ({version})
                            </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    )
}

export default LanguageSelector;