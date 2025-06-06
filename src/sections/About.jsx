import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {
    const [hasCopied,setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("laraba.manar@hns-re2sd.dz");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        },2000)
    }
    return (
        <section className={'c-space my-20'} id={"about"}>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>
                <div className="col-span-1 xl:row-span-3">
                    <div className={"grid-container"}>
                        <img src={"assets/grid1.png"} alt={"grid-1"} className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Hi, I'm Benahmed Ala Eddine 🚀</p>
                            <p className={"grid-subtext"}>
                                Engineering intelligent systems with code, creativity, and vision for a smarter future.

                            </p>
                        </div>
                    </div>
                </div>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid2.png"} alt={"grid-2"} className={"w-full sm:w-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Tech Stack</p>
                            <p className={"grid-subtext"}>I specialize in full-stack development, mobile apps, and AI-powered solutions, drawing on a strong foundation in computer science and real-world project experience.</p><
                            /div>
                        </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor={"rgba(0,0,0,0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules={true}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 35.5446, lng: 6.1597, text: "I'm here,Feel Free to contact me !", color: 'white', size: 25 }]}

                            />
                        </div>
                        <div>
                            <p className={"grid-headtext"}>I work remotely across most timezones</p>
                            <p className={"grid-subtext"}>I'm based in Algeria,Batna with consultation and freelance services available</p>
                            <Button name={"Contact Me"} isBeam containerClass={"w-full mt-10"}/>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid3.png"} alt={"grid-3"} className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Design/Coding & Management</p>
                            <p className={"grid-subtext"}>
                                With over four years of hands-on experience in the AINEC and ESP clubs, I've organized and contributed to national and international events, including IEEE conferences and startup incubators. Having led and collaborated on more than 50 projects, I specialize in managing and designing impactful, user-centered solutions across web, AI, and renewable energy systems. My work reflects a deep commitment to sustainability and innovation, bringing together technical expertise and a drive for real-world impact.                            </p>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid4.png"} alt={"grid-4"} className={"w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"}/>
                        <div className={"space-y-2"}>
                            <p className={"grid-subtext text-center"}>Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className={"lg:mt-4"}/>
                                <p className="text-sm md:text-base lg:text-lg font-medium text-gray_gradient text-white lg:mt-4">
                                    benahmed.ala.eddine@hns-re2sd.dz
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
