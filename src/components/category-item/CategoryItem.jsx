import { useNavigate } from "react-router-dom";
import "./CategoryItem.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigatehandler = () => navigate(route);
  return (
    <div className="mainpage-category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body" onClick={onNavigatehandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
