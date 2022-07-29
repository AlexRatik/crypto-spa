import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  LineChart,
  YAxis,
} from "recharts";
import { IHistory } from "../../features/cryptoCoins/IHistory";

interface IChartProps {
  data: IHistory[];
}

interface IDrawData {
  month: string;
  price: number;
}

const Chart = ({ data }: IChartProps) => {
  const [drawData, setDrawData] = useState<IDrawData[]>([]);

  useEffect(() => {
    const newData: IDrawData[] = data.map((item) => {
      const fullDate = new Date(item.time);
      const month = String(fullDate.getMonth());
      const day = String(fullDate.getDate());
      const date = `${month.length > 1 ? month : `0${month}`}.${
        day.length > 1 ? day : `0${day}`
      }`;
      const price = +(+item.priceUsd).toFixed(3);
      return { price, month: date };
    });
    setDrawData(newData);
  }, [data]);
  return (
    <LineChart
      width={1000}
      height={400}
      data={drawData}
      margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
    >
      <XAxis dataKey="month" />
      <YAxis dataKey="price" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="price" stroke="#ff7300" yAxisId={0} />
    </LineChart>
  );
};

export default Chart;
