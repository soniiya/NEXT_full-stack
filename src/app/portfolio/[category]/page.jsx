import React from 'react';
import styles from './page.module.css'
import Button from '../../../components/button/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { items } from './data';

const getData = (cat) =>{
  const data = items[cat];
  if(data){ 
    return data
  }
  return notFound();
}

const Category = ({params}) => {
  const data = getData(params.category);
  //console.log(data);

 //console.log(params)  
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>  
      
      {data.map((item) => (
              <div className={styles.item}>
              <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button text='See More' url='#'></Button>
              </div>
      
             <div className={styles.imgContainer}>
                  <Image
                    className={styles.img}
                    fill={true}
                    src={item.image}
                    alt="category_img"
                  />
              </div>
          </div>
      ))}
    </div>
  )
}

export default Category