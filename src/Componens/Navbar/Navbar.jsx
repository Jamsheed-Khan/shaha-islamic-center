import "./Navbar.css";
import Logo from "../Navbar/Logo.png";
import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";

export default function Navbar() {
  return (
    <div>
      <header className="head-sec">
        <div className="resNavbar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Navbar">
            <nav>
              <a href="#home">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#events">EVENTS</a>
              <a href="#programs">PROGRAMS</a>
              <a href="#FEATURES">FEATURES</a>
              <a href="#CONTECT">CONTECT</a>
              <a href="#DONATE">DONATE</a>
            </nav>
          </div>
          <div className="toggle">
            <MenuOutlined className="toggle" />
          </div>
        </div>
        <div className="animatetext">
          <motion.h1
            className="animatedtext"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state: hidden and slightly scaled down
            animate={{ opacity: 1, scale: 1 }} // Animation state: fully visible and original scale
            transition={{ duration: 1, delay: 0.5 }} // Duration of animation with a slight delay
            whileHover={{ scale: 1.05 }} // Animation when hovered: slightly scaled up
            whileTap={{ scale: 0.95 }} // Animation when tapped: slightly scaled down
          >
            Welcome to the Islamic Center
          </motion.h1>
        </div>
      </header>
    </div>
  );
}
