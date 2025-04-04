import './App.css';
import { Header } from './components/header';
import Postagens from './components/postagem';
import Infor from './components/informacao';

function App() {
  return (
    <div>
      <Header />
      <div className='corpo'>
        <div className='corpo-postagem'>
          <Postagens />
        </div>
        <div className='corpo-infor'>
          <Infor />
        </div>
      </div>
    </div>
  );
}

export default App;
