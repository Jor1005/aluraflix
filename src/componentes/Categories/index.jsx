// Category.js
import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard'; 
import styles from './Categories.module.css';

const StyledCategoryTitle = styled.h1`
  font-size: 2rem;
  width: fit-content;
  padding: 10px 15px;
  border-radius: 15px;
  margin-top: 0px;
  color: #ffffff;
  background-color: ${(props) => props.color};
  width: 400px;
  text-align: center;
`;

const Category = ({ data, videos, onDelete, onEdit }) => {  // Asegúrate de que onEdit esté en las props
  const { title, color } = data;

  return (
    <section className={styles.categoryContent}>
      <StyledCategoryTitle color={color}>{title}</StyledCategoryTitle>
      <div className={styles.videos}>
        {videos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            color={color}
            onEdit={onEdit}  // Pasa onEdit directamente aquí
            onDelete={onDelete} 
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
