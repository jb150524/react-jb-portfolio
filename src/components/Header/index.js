import React from 'react';
import coverImage from '../../assets/cover/dracula.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Juan Byrne</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
