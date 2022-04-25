import React from 'react'
import { Link} from 'react-router-dom'
import styles from './Navbar.module.css'
export const Navbar = () => {
  //  const navigate=useNavigate()
  //   const handlenavigate=()=>{
  //       navigate("/about")
  //   }
   
  return (
    <div className={styles.nav}>
        <Link to="/">Home</Link>
    </div>
  )
}

