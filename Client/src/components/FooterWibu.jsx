import React from "react";
import "./cssComponent/footerwibu.css";
function FooterWibu() {
  return (
    <div
      className="mt-0 p-1 bg-dark text-white text-center justify-content-center"
      id="footerP"
    >
      <p>
        Made by 20127072 - 20127424:{" "}
        <a
          href="https://github.com/Gobiilee/Torrent.git"
          className="text-muted"
        >
          Core
        </a>
        &nbsp;&nbsp;
        <a
          href="https://github.com/Gobiilee/Torrent.git"
          className="text-muted"
        >
          Client_deploy
        </a>
        &nbsp;&nbsp;
        <a
          href="https://github.com/Gobiilee/Torrent.git"
          className="text-muted"
        >
          Server_deploy
        </a>
      </p>
      <p>Torrent</p>
    </div>
  );
}

export default FooterWibu;
