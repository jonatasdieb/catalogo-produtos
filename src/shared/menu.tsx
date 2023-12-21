import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../contexts/cartContext";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
        >
          <Typography variant="h6">
            Catálogo de Produtos
          </Typography>
        </Link>

        <IconButton color="inherit">
          <Badge badgeContent={cartItems} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
