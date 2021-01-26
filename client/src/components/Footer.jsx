import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} <a href="https://github.com/nm-mutia/keeper-app" target="_blank">nmmutia</a></p>
    </footer>
  );
}

export default Footer;
