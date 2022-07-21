import React from "react";

function AboutHer() {
    return (
        <div className="columns w-row reveal-from-left">
            <div className="leftcontent w-col w-col-6 w-col-stack">
            <div data-w-id="b84f5156-c6e2-fb1d-6606-98a08030a472" style={{opacity: 1}} className="image"></div>
            </div>
            <div className="rightcontent w-col w-col-6 w-col-stack">
            <div data-w-id="3fd5aeb3-22da-ed60-7286-0d11f16597d3" style={{opacity: 1}} className="content">
                <div className="name">Cristina Villarroel</div>
                <h1 className="ceo"><strong className="bold-text">CEO</strong></h1>
                <h1 className="tagline"><em className="bold-text">Software Engineer</em></h1>
                <p className="bio">
                    I'm from Valencia, Venezuela. I went to High School there and moved to the U.S when I was 18 years old.
                    I went to Miami Dade College and then finalized my Computer Science studies at Florida International
                    University with a B.S in 2019. Upon graduation I got an offer to work for FinTech company as a Software Engineer
                    where I worked on multiple innovative applications.
                </p>
                <p className="bio">
                    2020 was a really rough year for me and I took 2021 to correct a lot of things in my life that didn't feel right. My
                    support system, hearing from others, and my strong will was what got me out of a really bad mental state, and in the
                    process of finding myself I learned a lot of things that I wish someone would had told me, that's how
                    <span className="text-color-primary"> HPS</span> was born. I wanted to create a platform for women to share their own
                    personal stories as well as being able to guide young women throught life's aspects by providing tools and resources.
                </p>
                <div className="links w-row">
                <div className="column w-col w-col-4">
                    <div className="text-block-2">Connect</div>
                    <ul role="list" className="list w-list-unstyled">
                    <li>
                        <a href="https://www.linkedin.com/in/cristina-villarroel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/HerCodingStory" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                    <li>
                        <a href="hercodingstory@gmail.com" target="_blank">Email</a>
                    </li>
                    </ul>
                </div>
                <div className="column-2 w-col w-col-4">
                    <div className="text-block-2">Social</div>
                    <ul role="list" className="list w-list-unstyled">
                    <li>
                        <a href="https://www.instagram.com/tazcrispy/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/tazcrispy" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@tazcrispy" target="_blank" rel="noopener noreferrer">TikTok</a>
                    </li>
                    </ul>
                </div>
                <div className="w-col w-col-4">
                    <div className="text-block-2">HPS Network</div>
                    <ul role="list" className="list w-list-unstyled">
                    <li>
                        <a href="https://www.facebook.com/groups/934693543870816/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="https://www.youtube.com/channel/UCMKIuaoOLkzTm_VuG6hC0bQ" target="_blank" rel="noopener noreferrer">Youtube</a>*/}
                    {/*</li>*/}
                    <li>
                        <a href="https://discord.gg/dCM2zaWc" target="_blank" rel="noopener noreferrer">Discord</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutHer;