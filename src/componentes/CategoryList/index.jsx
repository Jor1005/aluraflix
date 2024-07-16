import React from 'react';
import styles from './CategoryList.module.css'

const categories = [
  {
    title: "FRONTEND",
    color: "#6BD1FF"
  },
  {
    title: "BACKEND",
    color: "#00C86F"
  },
  {
    title: "INNOVACIÓN Y GESTION",
    color: "#FFBA05"
  },
];


const CategorySelect = ({ value, onChange }) => {
    
  return (
    <select className={styles.SelectCat} value={value} onChange={onChange}>
      <option value="" disabled hidden>Seleccione una categoría</option>
      {categories.map((category, index) => (
        <option key={index} value={category.title}>
          {category.title}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
