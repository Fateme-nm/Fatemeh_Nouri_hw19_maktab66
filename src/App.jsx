import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import CountriesContextProvider from "./contexts/CountriesContext";
import NotFound from './components/NotFound'


function App() {
  return (
    <CountriesContextProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="country/:name" element={<CountryDetails />} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </CountriesContextProvider>
  );
}

export default App;
