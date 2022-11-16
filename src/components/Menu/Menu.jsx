import React, { memo, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import MenuToggle from "../MenuToggle/MenuToggle";
import "../Menu/Menu.scss";

function Menu() {
   const [isLocal, setLocal] = useState("");

   useEffect(() => {
      const local = window.location.href;
      if (local.includes("MinhasVagas")) {
         setLocal("MV");
      } else if (local.includes("VagasExternas")) {
         setLocal("VE");
      }
   }, []);

   function toggleMenu() {
      const card = document.getElementById("card-click");
      card.classList.toggle("active");
   }

   return (
      <div className='header_nav_menu'>
         <a
            className={
               isLocal === "MV" ? "myVacanciesLink isActiveUrl" : "myVacanciesLink"
            }
            href='MinhasVagas'
         >
            Minhas Vagas
         </a>
         <a className='vacanciesExternalLink' href='VagasExternas'>
            Vagas Externas
         </a>
         <span>
            <MdEmail />
         </span>
         <button onClick={toggleMenu}>JF</button>

         <MenuToggle />
      </div>
   );
}

export default memo(Menu);
