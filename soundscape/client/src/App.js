import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import Callback from './components/Callback';
import ProductDetails from './components/ProductDetails';
import Playlists from './components/Playlists';
import Favorites from './components/Favorites';
import Offline from './components/Offline';

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/offline" element={<Offline />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
