import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/header";
import { getCryptoCoins } from "./features/cryptoCoins/cryptoCoinsSlice";
import { useAppDispatch } from "./hooks/hooks";
import Table from "./components/table/table";
import Pagination from "./components/pagination/pagination";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCryptoCoins());
  }, []);

  return (
    <div className="App">
      <Header />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
