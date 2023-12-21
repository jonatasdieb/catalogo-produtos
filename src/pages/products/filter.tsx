import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { IFilterProps } from "./interfaces";
import db from "../../db.json";

const Filter: React.FC<IFilterProps> = ({
  searchBy,
  handleSearchByChange,
  search,
  setSearch,
  handleCategoryChange,
  selectedCategory,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>Filtrar por</InputLabel>
          <Select
            value={searchBy}
            onChange={e => handleSearchByChange(e.target.value)}
            label="Filtrar por"
          >
            <MenuItem value="name">Nome</MenuItem>
            <MenuItem value="category">Categoria</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={10}>
        {searchBy === "name" ? (
          <TextField
            label="Pesquisar por nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={search}
            onChange={e => setSearch(e?.target?.value?.trim())}
          />
        ) : (
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Categoria</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={selectedCategory}
              onChange={e => handleCategoryChange(e.target.value)}
            >
              <MenuItem value={"all"}>Todas</MenuItem>
              {db.categories.map(category => (
                <MenuItem key={category.id} value={category.id}>
                  {category.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Grid>
    </Grid>
  );
};

export default Filter;
