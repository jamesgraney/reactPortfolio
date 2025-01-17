import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
