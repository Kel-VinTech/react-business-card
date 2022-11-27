import React  from "react";

const HeroContent = ( ) => {
    return (
        <div className="hero row">
            <h1>Paul Mccall</h1>
            <h3>Frontend Developer</h3>
            <a className="hero_web" href="www.google.com">Paulmccall.website</a>
            <div className="hero__btn">
                <a className="web_mail" href="https://mail.google.com/mail">
                <i class="fa-solid fa-envelope"></i>Email
                </a>
                <a className="web_link" href="https://linkedin.com/">
                <i class="fa-brands fa-linkedin"></i>Linkedin
                </a>
            </div>
        </div>
    )
}

export default HeroContent