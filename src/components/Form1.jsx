import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import styles from "./Form1.module.css";
export const Form1 = () => {
  const { data, handleInfo,disable } = useContext(AuthContext);
  

  // console.log({ data });
  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.divgrid}>
          <h1>Registeration form 1</h1>
          <div>
            <input
              type="text"
              name="uname"
              value={data.uname}
              onChange={handleInfo}
              placeholder="NAME"
            />
          </div>
          <div>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleInfo}
              placeholder="AGE"
            />
          </div>
          <div>
            <input
              type="date"
              name="dob"
              value={data.dob}
              onChange={handleInfo}
              placeholder="DOB"
            />
          </div>
          <Link to="two">
            <input type="submit" value="Next" disabled={disable} />
          </Link>
        </div>
      </form>
    </div>
  );
};
