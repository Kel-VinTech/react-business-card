import React  from "react";

const HeroContent = ( ) => {
    return (
        <div className="hero row">
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <a className="hero_web" href="www.google.com">LauraSmith.website</a>
            <div className="hero__btn">
                <a href="https://mail.google.com/mail">
                <i class="fa-solid fa-envelope"></i>Email
                </a>
                <a href="https://github.com/">
                <i class="fa-brands fa-github"></i>Github
                </a>
            </div>
        </div>
    )
}

export default HeroContent