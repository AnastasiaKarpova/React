import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Article from './article/Article.js';
import data from './db.json';

function App() {
  let db = data.peoplpe;
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />
      <Article db = {db[0]}/>
    </div>
  );
}

export default App;
