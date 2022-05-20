import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchusers } from "../redux/DataSlice";

const Table = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user.loading && <h2>Loading...</h2>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image url</th>
            <th>Description</th>
            <th>Tag Line</th>
            <th>EBC</th>
            <th>First Brewed</th>
            <th>Contributed By</th>
          </tr>
        </thead>
        <tbody>

        {!user.loading && user.users?.length > 0 ? (
            user?.users?.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.image_url}</td>
                <td>{ele.description}</td>
                <td>{ele.tagline}</td>
                <td>{ele.ebc}</td>
                <td>{ele.first_brewed}</td>
                <td>{ele.contributed_by}</td>
              </tr>
            ))
        ) : (
          <tr style={{ textAlign:"center",border:"none",marginLeft:"20px" }}>
           <td colSpan={4} style = {{border:"none" }}>No data to display</td> 
          </tr>
        )}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
