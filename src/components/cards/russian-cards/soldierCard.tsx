import React from 'react';
import s from 'styles/solderCard.module.scss';
import image from 'images/russian-images/partizan.jpg';

export const SoldierCard = () => (
  <div className={s.card}>
    <h2 className={s.title}>Ополченец</h2>
    <img src={image} />
    <p>
      урон
    </p>
  </div>
);
