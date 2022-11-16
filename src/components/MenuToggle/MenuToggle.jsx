import React from "react";
import "./MenuToggle.scss";
import logo from "../../img/default-logo.svg";

function MenuToggle() {
   return (
      <>
         <div className='backgroundMenuExpand'>
            <div id='card-click' className=''>
               <i></i>
               <i id='i'></i>
               <div id='header-card-click'>
                  <div className='box-btn-header'>
                     <span className='btn-header'>JF</span>
                  </div>
                  <div id='card-header-description'>
                     <p className='name-header'>joao felicio</p>
                     <p className='btn-edit-perfil'>Editar perfil</p>
                  </div>
               </div>
               <div className='body-card-click'>
                  <p className='body-card-title'>PÁGINAS DE CARREIRA</p>
                  <p className='body-card-btn'>
                     <img src={logo} alt='' /> primeira escolha teste
                  </p>
                  <div className='box-vacancies-card'>
                     <p>Minhas Vagas</p>
                     <p>Vagas externas</p>
                  </div>
               </div>
               <div className='footer-card-click'>
                  <p className='footer-card-data'>Dados da minha conta</p>
                  <p className='footer-card-data'>Sair</p>
                  <p className='footer-card-con-pol'>
                     Termos e condições de uso da Gupy
                  </p>
                  <p className='footer-card-con-pol'>
                     Política de privacidade da Gupy
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default MenuToggle;
