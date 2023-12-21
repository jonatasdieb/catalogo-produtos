import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import { IProduct, IProductListProps } from "./interfaces";
import db from "../../db.json";
import currency from "../../utils/formatCurrency";
import { ICategory } from "./interfaces";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  const [categoriesList, setCategoriesList] = useState<ICategory[]>([]);
  const { setCartItems } = useCart();

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const response = db.categories; //axios.get(...)
    setCategoriesList(response);
  }

  const handleAddToCart = (product: IProduct) => {
    setCartItems(prev => prev + 1);
  };

  return (
    <Grid container spacing={2} mt={2}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="textSecondary">
                {
                  categoriesList.find(c => c.id === product.categoryId)
                    ?.description
                }
              </Typography>
              <Typography variant="body2" component="p">
                {currency.format(product.price)}
              </Typography>
              <Link to={`/products/${product.id}`}>
                <Button variant="outlined" color="primary">
                  Ver Detalhes
                </Button>
              </Link>

              <IconButton               
                color="primary"
                onClick={() => handleAddToCart(product)}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
