import React from "react";
import {
  nextPage,
  prevPage,
  setCurrentPage,
} from "../../features/pagination/paginationSlice";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { usePagination } from "../../hooks/usePagination";
import "./pagination.scss";

const Pagination = () => {
  const { totalCount, currentPage, limit, siblingCount } = useAppSelector(
    (store) => store.pagination
  );
  const dispatch = useAppDispatch();

  const paginationRange: (number | string)[] | undefined = usePagination({
    siblingCount,
    currentPage,
    limit,
    total: totalCount,
  });
  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null;
  }
  let lastPage = 0;
  if (paginationRange) {
    lastPage = +paginationRange[paginationRange.length - 1];
  }
  return (
    <div className="pagination">
      <ul className="pagination__container">
        <li
          key={uuidv4()}
          className={`pagination__item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => dispatch(prevPage())}
        >
          <div className="pagination__arrow pagination__arrow_left" />
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === "DOTS") {
            return (
              <li key={uuidv4()} className="pagination__item__dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={uuidv4()}
              className={`pagination__item ${
                pageNumber === currentPage ? "selected" : ""
              }`}
              onClick={() => dispatch(setCurrentPage(+pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          key={uuidv4()}
          className={`pagination__item ${
            currentPage === lastPage ? "disabled" : ""
          }`}
          onClick={() => dispatch(nextPage())}
        >
          <div className="pagination__arrow pagination__arrow_right" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
