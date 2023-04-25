import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

import Product from "../types/Product";

interface FilterableProductTableProps {
    products: Product[]
}

export default function FilterableProductTable({ 
    products,
 }: FilterableProductTableProps) {
    return(
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )
}