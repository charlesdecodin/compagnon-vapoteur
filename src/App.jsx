import './App.scss';
import Input from './components/Input'
import Results from './components/Result'

function App() {
  return (
    <div className="App">
      <div id='inputs'>
        <Input
          label='Quantité'
          backgroundColor='#FF82F2'
        />
        <Input
          label='Taux de nicotine'
          backgroundColor='#FFF96B'
        />
        <Input
          label="Pourcentage d'arôme"
          backgroundColor='#6DCC6D'
        />
      </div>

    </div>
  );
}

export default App;
