import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: "+=0.5", // Use relative animation
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut", // Smooth motion
            });
        }
    }, [targetRef]); // Add dependency to run after the ref is set

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.2}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Target;
