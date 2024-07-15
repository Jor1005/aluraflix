import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard'; 
import styles from './Categories.module.css';

const StyledCategoryTitle = styled.h1`
  font-size: 3rem;
  width: fit-content;
  padding: 10px 15px;
  border-radius: 15px;
  margin-top: 0px;
  color: #ffffff;
  background-color: ${(props) => props.color};
`;

const Category = ({ data, videos }) => {
  const { title, color } = data;

  const handleEdit = (video) => {
    console.log('Editar video:', video);
  };

  const handleDelete = (id) => {
    console.log('Eliminar video con ID:', id);
  };

  return (
    <section className={styles.categoryContent}>
      <StyledCategoryTitle color={color}>{title}</StyledCategoryTitle>
      <div className={styles.videos}>
        {videos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
