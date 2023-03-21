import styles from './App.module.css';
import Header from './Header/Header';
import Home from './Home/Home';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
};

export default App;
