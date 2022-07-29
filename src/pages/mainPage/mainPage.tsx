import React from "react";
import Table from "../../components/table/table";
import Pagination from "../../components/pagination/pagination";
import Portfolio from "../../components/portfolio/portfolio";
import Overlay from "../../components/overlay/overlay";
import { useAppSelector } from "../../hooks/hooks";

const MainPage = () => {
  const showOverlay = useAppSelector(
    (store) => store.modalForBuyCoins.showModal
  );

  const showPortfolio = useAppSelector(
    (store) => store.portfolioReducer.isShowPortfolio
  );

  return (
    <div>
      <Table />
      <Pagination />
      {showPortfolio && <Portfolio />}
      {(showOverlay || showPortfolio) && <Overlay />}
    </div>
  );
};

export default MainPage;
