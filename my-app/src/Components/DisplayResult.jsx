import React from 'react'
import { useState } from 'react';
import { Box, Text, Button, useToast } from '@chakra-ui/react'
import { executeCode } from '../api.js';
export const DisplayResult = ({editorRef, language}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [output, setOutput] = useState("");
    const toast = useToast();

    async function runCode (){
        const sourceCode = editorRef.current.getValue();
        if(!sourceCode) return;

        setIsLoading(true);
        try {
            const response = await executeCode(sourceCode, language);
            setOutput(response.data.run.output);
        } catch (error) {
            console.log(error.message, error.status);
            toast({
                title: "An error occurred",
                description: error.message || "Something went wrong",
                status: "error",
                duration: 6000,
                isClosable: true
            });
        }
        finally{
            setIsLoading(false);
        }

    }

    return (
        <Box width="50%">
            <Text my={5} fontSize="lg"> Output: </Text>
            <Button variant="outline" colorScheme='green' mb={4} onClick={runCode} isLoading={isLoading}> Run Code </Button>
            <Box height="75vh" padding={2} border="2px solid" borderRadius={4} borderColor="#333"> {output} </Box>
        </Box>
    )
}

export default DisplayResult;