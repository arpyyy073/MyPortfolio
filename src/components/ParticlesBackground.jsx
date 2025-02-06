import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config"; 

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); 
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />;
};

export default ParticlesBackground;
