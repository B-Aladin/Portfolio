import React, { useEffect, useRef } from "react";
import { useFBX, useAnimations } from "@react-three/drei";

export default function Developer({ animationName = "idle", ...props }) {
    const group = useRef();

    // Load all animations
    const idle = useFBX("/models/animations/idle.fbx");
    const victory = useFBX("/models/animations/victory.fbx");
    const clapping = useFBX("/models/animations/clapping.fbx");
    const salute = useFBX("/models/animations/salute.fbx");

    // Normalize animation names (Mixamo sometimes names them "mixamo.com")
    const animations = { idle, victory, clapping, salute };

    Object.keys(animations).forEach((key) => {
        if (animations[key].animations.length > 0) {
            if (animations[key].animations[0].name === "mixamo.com") {
                animations[key].animations[0].name = key;
            }
        } else {
            console.warn(`No animations found in ${key}.fbx`);
        }
    });

    // Extract animation clips
    const animationClips = Object.values(animations).map((fbx) => fbx.animations[0]);

    // Register animations
    const { actions } = useAnimations(animationClips, group);

    // Debug: Log available animations
    useEffect(() => {
        console.log("🎭 Available Animations:", Object.keys(actions || {}));
    }, [actions]);

    // Play selected animation
    useEffect(() => {
        if (!actions || !actions[animationName]) {
            console.warn(`⚠️ Animation "${animationName}" not found! Available:`, Object.keys(actions || {}));
            return;
        }
        console.log(`▶️ Playing animation: ${animationName}`);
        Object.values(actions).forEach(action => action.stop());
        actions[animationName].reset().fadeIn(0.5).play();
    }, [actions, animationName]);

    return <primitive ref={group} object={idle} scale={0.032} position={[0, -3, 0]} rotation={[0,0, 0]} {...props} />;
}

// Preload assets for better performance
useFBX.preload("/models/animations/idle.fbx");
useFBX.preload("/models/animations/victory.fbx");
useFBX.preload("/models/animations/clapping.fbx");
useFBX.preload("/models/animations/salute.fbx");
