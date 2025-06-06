import React from 'react'

const Footer = () => {
    return (
        <section
            className={"c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"}>
            <div className={"text-white-500 flex gap-2"}>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className={"flex gap-3"}>
                <div className="social-icon">
                    <img src={"assets/facebook.png"} alt={"facebook"} className={"w-1/2 h-1/2"}/>
                </div>
                <div className="social-icon">
                    <img src={"assets/twitter.png"} alt={"twitter"} className={"w-1/2 h-1/2"}/>
                </div>
                <div className="social-icon">
                    <img src={"assets/instagram.png"} alt={"instagram"}
                         className={"w-52 h-10"}/>
                </div>
            </div>
            <p className="text-white-500">- Engineer Benahmed Ala Eddine (ﾒ￣▽￣)︻┳═一</p>
        </section>
    )
}
export default Footer
