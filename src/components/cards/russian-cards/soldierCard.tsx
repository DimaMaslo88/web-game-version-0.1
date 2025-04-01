import React from 'react';
import s from 'styles/solderCard.module.scss';
import image from 'images/russian-images/partizan.webp';
import damageIcon from 'images/russian-images/pngegg (1).png';

export const SoldierCard = () => (
  <div className={s.card}>
    <h2 className={s.title}>Ополченец</h2>
    <img src={image} alt="warrior" />
    <p>
      <img src={damageIcon} alt="damage" className={s.icons} title="Урон" />
    </p>
  </div>
);
