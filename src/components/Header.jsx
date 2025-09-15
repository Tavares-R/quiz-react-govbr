import { Header as DsHeader } from 'react-dsgov'; // Renomeando para evitar conflito de nome

function Header() {
  return (
    <DsHeader
      systemName="Perguntinhas"
      title="Quiz de Cidadania Fiscal"
      subTitle="Teste seus conhecimentos!"
      urlLogo="/vite.svg" // Usando um logo de exemplo por enquanto
    />
  );
}

export default Header;