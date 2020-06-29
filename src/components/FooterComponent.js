import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                {/* <div className="row" style={{ paddingTop: "7px" }}>             
                    <div className="col text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                </div> */}
                <div className="row" style={{ paddingTop: "7px"}}>
                    <div className="col">
                        &copy; 2020 Daniel Bablinskas. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;