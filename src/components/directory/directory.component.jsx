
import DirectoryItem from '../directory-item/directory-item.component';
import { StyledDirectory } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Baby Care',
    imageUrl: 'https://femina.wwmindia.com/content/2021/mar/care-011616482072.jpg',
    route: 'Shop/baby care'
  },

{
    id: 2,
    title: 'Bevrage & Drinks',
    imageUrl: 'https://images.freekaamaal.com/post_images/1600942117.jpg',
    route: 'Shop/bevrage & drinks'
  },
{
    id: 3,
    title: "Groceries",
    imageUrl: 'https://www.supermarketnews.com/sites/supermarketnews.com/files/busyconsumers_0.jpg',
    route: 'Shop/groceries'
  },
{
    id: 4,
    title: "Mens Products",
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'Shop/mens products'
  },
{
    id: 5,
    title: "Womens Products",
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'Shop/womens products'
  },
];

const Directory = ( )=>{

return (

<StyledDirectory>
{categories.map((category) => (
  <DirectoryItem key={category.id} category={category} />
))}
</StyledDirectory>
    );
};
export default Directory;

