import React, { Component } from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small blue">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <p className="text-left">Ministerio de Educación de Pública de Costa Rica</p>
          </div>
          <div className="col-md-6 mb-md-0 mb-3">
            <p className="text-right">Desarrollado por Elite Developers</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2019 Copyright:
        <a href="https://www.mep.go.cr/"> mep.go.cr</a>
      </div>
    </footer>
  );
};

export default Footer;
