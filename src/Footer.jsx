import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>{" "}
    </div>
  );
};

export default Footer;
