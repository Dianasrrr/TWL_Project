import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './HomePage.module.css';
import homeImage from '../Image/naruto.jpg';


const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.github.com/repos/octocat/Hello-World');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <header className={styles.header}>
      <nav className={styles.navbar}>
      </nav>
    </header>
    <div className={styles.homePage}>
      <img src={homeImage} alt="Home" className={styles.homeImage} />
      <h1 className={styles.title}>Halaman Beranda</h1>
      <p className={styles.description}>Selamat datang di halaman beranda!</p>

      <div className={styles.dataContainer}>
        <h2 className={styles.dataTitle}>Data dari API:</h2>
        {data && (
          <div className={styles.dataContent}>
            <p className={styles.dataItem}>{data.name}</p>
            <p className={styles.dataItem}>{data.description}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default HomePage;
