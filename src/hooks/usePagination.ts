import { useMemo } from "react";

interface IUsePagination {
  total: number;
  limit: number;
  siblingCount: number;
  currentPage: number;
}

const DOTS = "DOTS";
export const usePagination = ({
  total,
  currentPage,
  limit,
  siblingCount = 1,
}: IUsePagination): (number | string)[] | undefined => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(total / limit);
    const totalPageNumbers = siblingCount + 1;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
    const isShowLeftDots = leftSiblingIndex > 2;
    const isShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstIndexPage = 1;

    if (!isShowLeftDots && isShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (isShowLeftDots && !isShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstIndexPage, DOTS, ...rightRange];
    }

    if (isShowRightDots && isShowLeftDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstIndexPage, DOTS, ...middleRange, DOTS, totalPageCount];
    }
  }, [total, limit, siblingCount, currentPage]);
  return paginationRange;
};

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  const res: number[] = [];
  for (let i = 0; i < length; i++) {
    res.push(start + i);
  }
  return res;
};
