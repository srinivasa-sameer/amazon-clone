import Product from '../Product/Product';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <img
          className={styles.home__image}
          alt="banner"
          src="https://m.media-amazon.com/images/I/71rCxXNHMNL._SX3000_.jpg"
        />

        <div className={styles.home__row}>
          <Product
            id="12345"
            title="HeadPhones"
            price={19.99}
            rating={4}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
          />
          <Product
            id="12345"
            title="HeadPhones"
            price={19.99}
            rating={4}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
          />
        </div>
        <div className={styles.home__row}>
          <Product
            id="12345"
            title="HeadPhones"
            price={19.99}
            rating={4}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
          />
          <Product
            id="12345"
            title="HeadPhones"
            price={19.99}
            rating={4}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
          />
          <Product
            id="12345"
            title="HeadPhones"
            price={19.99}
            rating={4}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
          />
        </div>
        <div className={styles.home__row}>
          <Product
            id="12345"
            title="HeadPhones"
            price={19.99}
            rating={4}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
