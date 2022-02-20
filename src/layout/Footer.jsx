import {DiGithubFull} from "react-icons/di";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import {FaGithub} from "react-icons/fa";
import Image from 'next/image'
import { black } from "ansi-colors";

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-muted " style = {{backgroundColor: '#38304C'}}>
  
  <div className="text-center p-4 " >
      <span>Copyright </span>
      <AiOutlineCopyrightCircle />
  {new Date().getFullYear()}
  <span> TRAINER. All Rights Reserved</span>
  <a href="https://www.github.com" target = "blank" className=" text-reset ps-2 align-bottom">
        <FaGithub size={20}/>
      </a>
  </div>
  </footer>


    );
}

export default Footer;

// fixed-bottom