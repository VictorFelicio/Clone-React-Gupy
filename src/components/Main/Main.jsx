import React, { memo } from "react";
import Card from "../Card/Card";
import "./Main.scss";

function Main() {
   return (
      <section>
         <div className='header_section'>
            <h2>Minhas Vagas</h2>
            <p>Acompanhe e gerencie as vagas que você se candidatou.</p>
            <h3>Vagas que você se candidatou</h3>
         </div>
         <div className='main_card_container'>
            <Card
               title='Gerente de Produto (Remoto)'
               description='Efetivo'
               location='São Paulo/SP'
            />
            <Card
               title='Demostration testing job application-flow 0'
               description='Efetivo'
               location='Lima/AM'
            />
            <Card
               title='Demostration testing job application-flow 0'
               description='Efetivo'
               location='Lima/AM'
            />
            <Card
               title='Demostration testing job application-flow 0'
               description='Efetivo'
               location='Lima/AM'
            />
         </div>
      </section>
   );
}

export default memo(Main);
