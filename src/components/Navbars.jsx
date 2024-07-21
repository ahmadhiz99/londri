import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { tokenCurr } from "../lib/axios";

const Navbars = () => {

  let token = localStorage.getItem('token')

  return (
    <Navbar className="bg-gradient-to-r from-cyan-500 to-blue-500 fixed p-2">
      <NavbarBrand>
        <p className="font-bold text-inherit">Enigma Laundry</p>
      </NavbarBrand>
        {
        token?
        (
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem isActive>
                <Link to="/" color="foreground">
                  Transaksi
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/produk" aria-current="page">
                  Produk
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" to="/pelanggan">
                  Pelanggan
                </Link>
              </NavbarItem>
         
          </NavbarContent>
          )
          :
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem isActive>
                <Link to="/" color="foreground">
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/produk" aria-current="page">
                  Register
                </Link>
              </NavbarItem>
          </NavbarContent>
        }
    </Navbar>
  );
};
export default Navbars;
