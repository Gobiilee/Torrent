import React from "react";
import "./cssComponent/footerwibu.css";
function FooterWibu() {
  return (
    <div
      className="mt-0 p-1 bg-dark text-white text-center justify-content-center"
      id="footerP"
    >
      <p>
        Made by group 5, Github:{" "}
        <a
          href="https://github.com/tienhoangggg/cnpm.git"
          className="text-muted"
        >
          Core
        </a>
        &nbsp;&nbsp;
        <a
          href="https://github.com/tienhoangggg/cnpm_client"
          className="text-muted"
        >
          Client_deploy
        </a>
        &nbsp;&nbsp;
        <a
          href="https://github.com/tienhoangggg/cnpm_server"
          className="text-muted"
        >
          Server_deploy
        </a>
      </p>
      <p>Wibu Wallpaper</p>
    </div>
  );
}

export default FooterWibu;
