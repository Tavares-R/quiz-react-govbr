function MenuScreen({ onStartGame }) {
  return (
    <div>
      <h2>Bem-vindo ao Quiz!</h2>
      <button onClick={onStartGame}>Começar Jogo</button>
      
    </div>
  );
}

export default MenuScreen;