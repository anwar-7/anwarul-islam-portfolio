import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Project from './Pages/Projects/Project';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
