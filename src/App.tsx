import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/header";
import { getCryptoCoins } from "./features/cryptoCoins/cryptoCoinsSlice";
import { useAppDispatch } from "./hooks/hooks";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCryptoCoins());
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
