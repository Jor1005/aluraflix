import styled from "styled-components"
import "./Categories.css"

const StyledCategoryTitle = styled.h1`
  font-size: 3rem;
  width: fit-content;
  padding: 10px 15px;
  border-radius: 15px;
  margin-top: 0px;
  color: #ffffff; 
  background-color: ${(props) => props.bgColor};
`;

const Category = (props) => {
  return (
    <section className="category-content">
      <StyledCategoryTitle bgColor={props.data.color}>
        {props.data.title}
      </StyledCategoryTitle>
      <div className="videos"></div>
    </section>
  );
};

export default Category