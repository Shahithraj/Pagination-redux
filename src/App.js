import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table/Table";
import Pagination from "./Table/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "./redux/DataSlice";

function App() {
  const [tableData, setTableData] = useState("");
  const [totalOrders, setTotalOrders] = useState(0);

  const user = useSelector(state => state.user)
  const page = useSelector(state => state.page)

  const dispatch = useDispatch()

  useEffect(() => {
    const abortController = new AbortController()
    dispatch(fetchusers(user.currPage))
    return () => abortController.abort()
  }, [user.currPage]);



  return (
    <div className="App">
    <Pagination />
      <Table />
    </div>
  );
}

export default App;
