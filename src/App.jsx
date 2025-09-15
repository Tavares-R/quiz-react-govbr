
import { useState, useEffect } from 'react';


import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MenuScreen from './components/MenuScreen.jsx';
import GameScreen from './components/GameScreen.jsx';
import ResultScreen from './components/ResultScreen.jsx';


function App() {
  const [screen, setScreen] = useState('menu');
  
  
  const [questions, setQuestions] = useState([]); 


  useEffect(() => {
    fetch('/questions.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro de rede: ${response.statusText}`);
        }
        return response.json(); 
      })
      .then(data => {
        console.log('Perguntas carregadas:', data);
        setQuestions(data); 
      })
      .catch(error => {
        console.error('Falha ao buscar o arquivo de perguntas:', error);
      });
  }, []); 

  return (
    <div>
      <Header />
      
      <main>
        {/* Renderização Condicional: mostra o componente correto baseado no estado 'screen' */}
        {screen === 'menu' && <MenuScreen onStartGame={() => setScreen('game')} />}
        
        {screen === 'game' && <GameScreen questions={questions} />}
        
        {screen === 'result' && <ResultScreen />}
      </main>
      
      <Footer />
    </div>
  );
}


export default App;