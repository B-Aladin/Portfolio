import {Canvas} from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const issmall=useMediaQuery({maxWidth:440});
    const isMobile=useMediaQuery({maxWidth:768} );
    const isTablet=useMediaQuery({maxWidth:768,minWidth:1024} );

    const sizes=calculateSizes(issmall,isMobile,isTablet);
    return (
        <section className={"min-h-screen w-full flex-col relative"}>
            <div className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"}>
                <p className={"sm:text-3xl text-xl font-medium text-white text-center font-generalsans"}>
                    Hey,I am Aladin ️<span className={"waving-hand"}>👋</span></p>
                <p className={"hero_tag text-gray_gradient text-center"}>Crafting Innovative Solutions !!</p>
            </div>
            <div className={"w-full h-full absolute inset-0"}>
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                //scale={0.07}
                                //position={[0, 0, 0]}
                                //rotation={[0, 280, 0]}
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-2 left-0 right-0 w-full z-10 c-space">
                <a href={"#about"} className={"w-fit"}>
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/> </a>
            </div>
        </section>

    )
}
export default Hero
