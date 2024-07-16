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
  margin-top: 10px;
  color: #ffffff;
  background-color: ${(props) => props.color};
  width: 400px;
  text-align:center;
  
`;

const Category = ({ data, videos, onDelete, onEdit }) => {
  return (
    <section>
      <StyledCategoryTitle color={data.color}>{data.title}</StyledCategoryTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {videos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onDelete={onDelete} 
            onEdit={onEdit} 
            color={data.color} 
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
