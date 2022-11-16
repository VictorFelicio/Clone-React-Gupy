import React, { memo } from "react";
import "./Card.scss";
import imgCard from "../../img/reuniao.png";
import { MdWork } from "react-icons/md";
import { MdFmdGood } from "react-icons/md";

function Card(props) {
  return (
    <div className='card_container_card'>
      <div className='card_myVacancies'>
        <img src={imgCard} alt='' />
        <div className='card_myVacancies_info'>
          <p className='card_job_title'>{props.title}</p>
          <p className='card_job_description'>
            <span>
              <MdWork />
            </span>
            {props.description}
          </p>
          <p className='card_job_location'>
            <span>
              <MdFmdGood />
            </span>
            {props.location}
          </p>
          <div className='card_buttons'>
            <button className='btn_giveUp'>Desistir</button>
            <button className='btn_see'>Ver Andamento</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
