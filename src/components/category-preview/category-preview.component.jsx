
import ProductCard from '../product-card/product-card.component';
import { StyledCategoryPreview, StyledPreviewTitle, StyledPreview } from './category-preview.styles';

const CategoryPreview = ({title, products}) => {

return (
    <StyledCategoryPreview>
<h2>
   <StyledPreviewTitle to={title}>
    {
     title.toUpperCase()
   }
   </StyledPreviewTitle>
</h2>
<StyledPreview>
{
    products
    .filter((_, idx)=> idx < 4 ) 
    .map((product)=> 
    <ProductCard key={product.id} product={product}/>
    )
}
</StyledPreview>
    </StyledCategoryPreview>
)
};

export default CategoryPreview;