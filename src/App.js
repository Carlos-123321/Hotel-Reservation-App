import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from "./mainpage/mainpage";
import CardDetails from './cardDetailsPage/CardDetails';
import FavouritesPage from './favouritespage/favouritespage';
import CartPage from './cartpage/cartpage';
import SignUpPage from './signUp/signUp';
import LoginPage from './logInPage/loginPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>} />

        <Route path="/card-details/:id" element={<CardDetails/>} />
        <Route path="/favourites" element={<FavouritesPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route path="/log-in" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
