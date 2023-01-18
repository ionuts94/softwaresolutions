import React from 'react';
import './Buttons.scss';

interface BlueButtonInterface {
  text: string,
  icon?: any,
  isDisabled?: boolean,
  onClick: React.MouseEventHandler,
  style?: {}
}

export const BlueButton = ({ text, icon, isDisabled, onClick, style }: BlueButtonInterface) => {
  return (
    <button
      className='button-container'
      onClick={onClick}
      disabled={isDisabled}
      style={style}
    >
      <span className='button-text'>{text}</span>
      <span className='button-icon'>{icon}</span>
    </button>
  )
}
