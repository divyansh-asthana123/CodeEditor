import React from 'react'
import { useState,useRef } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import Editor from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import DisplayResult from './DisplayResult.jsx';
function CodeEditor () {

    const editorRef = useRef();
    const [code,setCode] = useState('');
    const [language, setLanguage] = useState('javascript');

    function handleEditorChange (changedCode){
        setCode(changedCode);
    }

    function onSelect(language) {
        setLanguage(language);
        setCode(CODE_SNIPPETS[language] || "");
    }

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    return (
        <Box>
            <HStack spacing={4}>
                <Box width="50%">
                    <Box my={5}><LanguageSelector currentLanguage = {language} onSelect = {onSelect}/></Box>
                    
                    <Editor
                        height="75vh" 
                        theme = "vs-dark" 
                        defaultLanguage={language} 
                        defaultValue={CODE_SNIPPETS[language] || ""}
                        language={language}
                        value={code} 
                        onChange={handleEditorChange}
                        onMount={onMount}
                    />
                </Box>
                <DisplayResult editorRef = {editorRef} language={language}/>
            </HStack>
        </Box>
    )
}

export default CodeEditor;
