import React from 'react';
import s from 'styles/solderCard.module.scss';
import image from 'images/russian-images/partizan.webp';
import damageIcon from 'images/russian-images/pngegg (1).png';

export const MilitiamanCard = () => {
  const damage = 2;// не используется пока
  return (
    <div className={s.card}>
      <h2 className={s.title}>Ополченец</h2>
      <img src={image} alt="warrior" />
      <div className={s.characteristics}>
        <img src={damageIcon} alt="damage" className={s.icons} title="Урон" />

        {damage}
      </div>
    </div>
  );
};
