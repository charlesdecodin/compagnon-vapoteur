import './App.scss';
import Input from './components/Input'
import Results from './components/Result'
import Base from './images/base.png'
import Booster from './images/booster.png'
import Flavor from './images/flav.png'

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
      <div id='results'>
        <Results
          img={Base}
          value={80}
          bcgColor="#FF82F2"
          title="Base"
        />
        <Results
          img={Booster}
          value={80}
          bcgColor="#EF5555"
          title="Booster"
        />
        <Results
          img={Flavor}
          value={80}
          bcgColor="#6DCC6D"
          title="Arôme"
        />
      </div>

    </div>
  );
}

export default App;
