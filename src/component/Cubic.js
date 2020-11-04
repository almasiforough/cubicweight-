import React, { useState, useEffect } from "react";
import { fetchGet } from "../helper/Fetch";
import {
  CalculatecubicWeight,
  CalculateAverageCubicWeight,
} from "../helper/functions";

export default function Cubic() {
  const [cubicWeghts, changeCubicWeghts] = useState([]);
  const [currentPage, changeCurrentPage] = useState("/api/products/1");

  useEffect(() => {
    if (currentPage) {
      fetchGet(currentPage).then((responseJSON) => {
        changeCurrentPage(responseJSON.next);
        const filterArray = responseJSON.objects.filter(
          (item) => item.category === "Air Conditioners"
        );

        filterArray.forEach((item) => {
          const cubitWeight = CalculatecubicWeight(item.size);
          changeCubicWeghts((cubicWeghts) => [...cubicWeghts, cubitWeight]);
          
        });
      });
    }
  }, [currentPage]);

  return (
    <div className='result'>
      <h3>Average Cubic Weight of Air Conditioners</h3>
      <div className='result__box'>
        {currentPage
          ? "Counting..."
          : CalculateAverageCubicWeight(cubicWeghts) + " kg"}
      </div>
    </div>
  );
}
