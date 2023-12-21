// pages/products/details.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, CssBaseline, Typography, Button, CardMedia } from "@mui/material";
import db from "../../db.json";
import currency from "../../utils/formatCurrency";
import { IProduct, ICategory } from "./interfaces";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [category, setCategory] = useState<ICategory | null>(null);  

  useEffect(() => {
    getProductDetails();
  }, []);

  async function getProductDetails() {    
    const productId = parseInt(id as string);

    const selectedProduct = db.products.find(p => p.id === productId) || null;    
    const productCategory = db.categories.find(c => c.id === selectedProduct?.categoryId) || null;      

    setProduct(selectedProduct);
    setCategory(productCategory);
  }

  return (
    <Container component="main" maxWidth="lg">     
      {product && (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            {product.name} - Detalhes
          </Typography>    
          {product.image && (
            <img
              src={product.image}
              height={200}
            />
          )}   
          <Typography variant="h6">Categoria:</Typography>
          <Typography variant="body1" paragraph>
            {category?.description}
          </Typography>
          <Typography variant="h6">Preço:</Typography>
          <Typography variant="body1" paragraph>
            {currency.format(product.price)}
          </Typography>
          <Typography variant="h6">Descrição:</Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          {/* <Button variant="outlined" color="primary">
            Add to Cart
          </Button> */}
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
