import React, {useState, useEffect} from 'react';
import './App.scss';
import Input from './components/Input'
import Results from './components/Result'
import Base from './images/base.png'
import Booster from './images/booster.png'
import Flavor from './images/flav.png'

function App() {

  const [inputs, setInputs] = useState({
    quantity: 0,
    nicotine: 0,
    flavor: 0
  })

  const [results, setResults] = useState({
    base: 0,
    booster: 0,
    flavor: 0
  })

  useEffect(() => {
    const calculate = () => {
      let booster = (inputs.nicotine * inputs.quantity) / 20;
      let flavor = (inputs.quantity * inputs.flavor) / 100
      let base = inputs.quantity - booster - flavor

      setResults({
        base: base,
        booster: booster,
        flavor: flavor
      })
    }
    calculate()
    
  }, [inputs])



  return (
    <div className="App">
      <h1 id='title'>Compagnon Vapoteur</h1>
      <div id='subtitle-container'>
        <h2 id="subtitle">Calculateur pour fabriquer son liquide DIY</h2>
      </div>
      <section id='inputs'>
        <Input
          label='Quantité'
          backgroundColor='#FF82F2'
          setValue={setInputs}
          value={inputs}
          property="quantity"
        />
        <Input
          label='Taux de nicotine'
          backgroundColor='#FFF96B'
          setValue={setInputs}
          value={inputs}
          property="nicotine"
        />
        <Input
          label="Pourcentage d'arôme"
          backgroundColor='#6DCC6D'
          setValue={setInputs}
          value={inputs}
          property="flavor"
        />
      </section>
      <section id='results'>
        <Results
          img={Base}
          value={results.base}
          bcgColor="#FF82F2"
          title="Base"
        />
        <Results
          img={Booster}
          value={results.booster}
          bcgColor="#EF5555"
          title="Booster"
        />
        <Results
          img={Flavor}
          value={results.flavor}
          bcgColor="#6DCC6D"
          title="Arôme"
        />
      </section>

    </div>
  );
}

export default App;
