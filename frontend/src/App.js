import './index.css';
import './variables.css';
import WalletConnection from './components/WalletConnection.js';
import Button from './components/buttons/Button';
import TabButton from './components/buttons/TabButton';
import TextArrowButton from './components/buttons/TextArrowButton';
import Card from './components/cards/Card';
import AddressCopyButton from './components/profile/addressCopyButton/AddressCopyButton';
import useFetch from "react-fetch-hook";


function App() {

  return (
    <>
      <WalletConnection />
      <Button text='Кнопо4ка' link='#hello' primary />
      <Button text='Кнопо4ка menee vazhnaya' link='#hello' secondary />
      <Button text='Кнопо4ка voobshe pohuy' link='#hello' tretiary />
      <TabButton text='Кнопо4ка' link='#hello' primary />
      <TabButton text='Кнопо4ка menee vazhnaya' link='#hello' secondary />
      <TextArrowButton text='fjgrdsijg' link='#hithere' />
      <Card headline='Amount of TON' value='586,436,345' isTonValue />
      <AddressCopyButton walletAddress='EQCmvIQ561RsheBUoEpWj6J3EL8uba0HOXbOB4NgFSUa2YPh' />
    </>
  );
}

export default App;
