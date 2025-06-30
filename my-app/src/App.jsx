import { Box } from '@chakra-ui/react'
import CodeEditor from './Components/CodeEditor.jsx'
import LanguageSelector from './Components/LanguageSelector.jsx'
import DisplayResult from './Components/DisplayResult.jsx'
import { useState } from 'react'
import axios from 'axios'
function App() {


  const [testingText, setTestingText] = useState("")

  axios.get("/api/home").then((response) => {
    console.log(response);
    setTestingText(response.data);
  })
  .catch((error) => {
    console.log(error)
  })
  
  // axios.get("/api/home")
  // .then((res) => {
  //   console.log(res)
  //   if(res) setTestingText(res.data)
  // })
  // .catch((error) => {
  //   console.log(error)
  // }
  // )

  return (
    <>
      <Box>{testingText}</Box>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}      >
        <CodeEditor/>
      </Box>
    </>
  )
}

export default App
