import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../../context/categories.context';
import ProductCard from '../../product-card/product-card.component';
import { StyledCategory, CategoryTitle } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
  
    return (
      <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <StyledCategory>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </StyledCategory>
      </Fragment>
    );
  };
  
  export default Category; 