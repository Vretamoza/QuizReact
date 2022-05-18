import InitialPage from './pages/InitialPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
