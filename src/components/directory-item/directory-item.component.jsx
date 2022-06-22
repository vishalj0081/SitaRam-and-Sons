import { useNavigate } from 'react-router-dom';
import { StyledBGImage, Styledbody, StyledDirectoryItem } from './directory-item.styles';

const DirectoryItem = ({category})=>{
const {imageUrl, title, route } = category;

const NavigateTo = useNavigate();

const NavigateHandler = ()=> NavigateTo(route);

    return(
        <StyledDirectoryItem onClick={NavigateHandler}>
        <StyledBGImage imageUrl={imageUrl} />
            
    
        <Styledbody>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Styledbody>
      </StyledDirectoryItem>
    )
}
  
export default DirectoryItem;