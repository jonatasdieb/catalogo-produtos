export interface IProduct {
    id: number;    
    categoryId: number;
    name: string;
    description: string;
    image: string;
    price: number;
  }
  
  export interface IProductListProps {
    products: IProduct[];        
  }

  export interface ICategory {
    id: number;     
    description: string;
  }

  export interface IFilterProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    searchBy: string;       
    handleCategoryChange: (value: string) => void;
    handleSearchByChange: (value: string) => void;
    selectedCategory: string;
  }