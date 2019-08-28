import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="row" id="homepage">
        <div className="col-xs-2 border-right border-dark col-xs-offset-4">
          {' '}
          <img
            src="https://www.mep.go.cr/sites/default/files/imagecache/blog_teaser_grande/blog/portada/captura_1.jpg"
            height="100"
            width="200"
          />{' '}
        </div>
        <div className="col-sm-1 "> </div>
        <div className="col-xs-2 ">
          {' '}
          <h3 className="text-center">
            <i class="fa fa-book" aria-hidden="true"></i>
            Bienvenido al Sistema Educativo
            <i class="fa fa-book" aria-hidden="true"></i>
          </h3>{' '}
          <img src="https://imgur.com/lso15mW.png" height="400" width="730" />
        </div>
        <div className="col-sm-1 "> </div>
        <div className="border-right border-dark col-xs-offset-4"></div>
      </div>
    );
  }
}

export default Homepage;
