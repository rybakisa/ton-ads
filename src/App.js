import './index.css';
import WalletConnection from './components/WalletConnection.js';
import Button from './components/buttons/Button';
import TabButton from './components/buttons/TabButton';
import Header from './components/header/Header';
import TextArrowButton from './components/buttons/TextArrowButton';

function App() {
  return (
    <>
      <Header />
      <WalletConnection />
      <Button text='Кнопо4ка' link='#hello' primary/>
      <Button text='Кнопо4ка menee vazhnaya' link='#hello' secondary />
      <Button text='Кнопо4ка voobshe pohuy' link='#hello' tretiary />
      <TabButton text='Кнопо4ка' link='#hello' primary/>
      <TabButton text='Кнопо4ка menee vazhnaya' link='#hello' secondary />
      <TextArrowButton text='fjgrdsijg' link='#hithere' />
    </>
  );
}

export default App;
