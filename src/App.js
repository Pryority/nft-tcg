import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./Pages/Main/Main";
import Market from "./Pages/Market";
import Games from "./Pages/Games/Games";
import { ChakraProvider } from "@chakra-ui/react";
import Header from './Components/Header/Header';

function App() {
  return (
    <div class="no-scroll bg-gradient-to-br from-stone-50 to-stone-100/80 dark:bg-teal-900 min-h-screen flex flex-col relative">
      <ChakraProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/market' element={<Market />} />
            <Route path='/games' element={<Games />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
