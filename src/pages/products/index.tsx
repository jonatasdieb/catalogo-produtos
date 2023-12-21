import React, { useState, useEffect } from "react";
import {
  AppBar,
  Badge,
  Chip,
  Container,
  CssBaseline,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ProductList from "./list";
import db from "../../db.json";
import { IProduct } from "./interfaces";
import Filter from "./filter";

const Products: React.FC = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [productsListFiltered, setProductsListFiltered] = useState<IProduct[]>(
    []
  );
  const [search, setSearch] = useState<string>("");
  const [searchBy, setSearchBy] = useState<string>("name");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(filter, [search, productsList, searchBy, selectedCategory]);

  function getProducts() {
    const response = db.products; //axios.get(...)

    setProductsList(response);
    setProductsListFiltered(response);
  }

  function filter() {
    let filteredProducts: IProduct[] = [];

    if (searchBy === "name") {
      filteredProducts = productsList.filter(p =>
        p.name.toUpperCase().includes(search?.toUpperCase() || "")
      );
    } else if (searchBy === "category") {
      if (selectedCategory == "all") {
        filteredProducts = productsList;
      } else {
        filteredProducts = productsList.filter(
          p => p.categoryId == parseInt(selectedCategory)
        );
      }
    }

    setProductsListFiltered(filteredProducts);
  }

  const handleSearchByChange = (value: string) => {
    setSearchBy(value);
    setSearch("");
    setSelectedCategory("all");
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Filter
        search={search}
        setSearch={setSearch}
        searchBy={searchBy}       
        handleCategoryChange={handleCategoryChange}
        handleSearchByChange={handleSearchByChange}
        selectedCategory={selectedCategory}
      />
      <Divider>
        <Chip label={`${productsListFiltered.length} produtos encontrados`} />
      </Divider>
      <ProductList products={productsListFiltered} />
    </Container>
  );
};

export default Products;
