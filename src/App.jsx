import "./App.css";
import React from "react";
import Home from "./Pages/Transaksi/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Produk from "./Pages/Produk/Produk";
import Pelanggan from "./Pages/Pelanggan/Pelanggan";
import NotFound from "./Pages/NotFound";
import Navbars from "./components/Navbars";
import Footers from "./Footers";
import DetailTransaksiPages from "./Pages/Transaksi/DetailTransaksiPages";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/detail-transaksi" element={<DetailTransaksiPages />} />
        <Route path="/pelanggan" element={<Pelanggan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
