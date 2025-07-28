import { Container } from "react-bootstrap";
import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai"
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";

import styles from "./TopNav.module.css";

const TopNav: React.FC = () => {
  return (
    <div className={`${styles.topNav}`}>
      <Container className="d-flex justify-content-between align-items-center">
        <div className={styles.leftSide}>
            <span>(000) 999-898-999</span>
            <span>info@trisog.com</span>
        </div>
        <div className={styles.rightSide}>
            <a href="https://media1.tenor.com/m/_6r0zVrSkEcAAAAd/alexandre-de-moraes-xand%C3%A3o.gif" target="_blank"><AiOutlineTwitter /></a>
            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn /></a>
            <a href="https://www.google.com/" target="_blank"><AiOutlineGoogle /></a>
            <a href="https://br.pinterest.com/" target="_blank"><FaPinterestP /></a>
            <select className={`${styles.selector} ms-3`}>
                <option value="EUR">eur</option>
                <option value="USD">us</option>
                <option value="BRL">real</option>
            </select>
        </div>
      </Container>
    </div>
  )
}

export default TopNav;