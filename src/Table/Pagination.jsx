import React, { useState } from "react";
import {
  MdFirstPage,
  MdNavigateBefore,
  MdNavigateNext,
  MdLastPage,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchusers,
  fifthPage,
  firstPage,
  fourthPage,
  lastPage,
  prevPage,
  secondPage,
  thirdPage,
} from "../redux/DataSlice";

const Pagination = () => {
  const [box, setBox] = useState(true);
  const page = useSelector((state) => state.user.currPage);

  const dispatch = useDispatch();



  let bgc = "";
  if (page == 1) {
    bgc = "grey";
  } else {
    bgc = "";
  }

  return (
    <div className="table-pagination-container">
      <div className="pagination_button">
        <button
          style={{ color: bgc }}
          onClick={() => {dispatch(prevPage());}}
        >{`<<`}</button>
        <button
          className={`selected ${box}`}
          onClick={() => {
            dispatch(firstPage());
            // dispatch(fetchusers())
            setBox(false);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            dispatch(secondPage())
            // dispatch(fetchusers())
            setBox(false);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            dispatch(thirdPage());
            setBox(false);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            dispatch(fourthPage());
            setBox(false);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            dispatch(fifthPage());
            setBox(false);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            dispatch(lastPage());
            setBox(false);
          }}
        >{`>>`}</button>
      </div>
    </div>
  );
};

export default Pagination;
