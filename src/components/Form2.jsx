import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import styles from "./Form1.module.css";
export const Form2 = () => {
  const { data, handleInfo, handleSubmit, disable } = useContext(AuthContext);
  // console.log({ data  });
  return (
    <div className={styles.mainDiv}>
      <form onSubmit={handleSubmit}>
        <div className={styles.divgrid}>
          <h1>Registeration form 2</h1>
          <div>
            <input
              type="text"
              name="residence"
              value={data.residence}
              onChange={handleInfo}
              placeholder="RESIDENCE"
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={data.address}
              onChange={handleInfo}
              placeholder="ADDRESS"
            />
          </div>
          <div>
            <input
              type="number"
              name="pin"
              value={data.pin}
              onChange={handleInfo}
              placeholder="PIN"
            />
          </div>
          {/* <button>submit</button> */}
          <Link to="/two/user">
            <input type="submit" value="Submit" disabled={disable} />
          </Link>
          {/* <input type="submit" value="Submit" disabled={disable}/> */}
        </div>
      </form>
    </div>
  );
};
