import Particles from 'react-tsparticles';
import particlesConfig from '../config/particles-config';
import React, { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

// Higher component for the background, For rendering the background animation
const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);
	return (
		<Particles
			id="tsparticles"
			options={particlesConfig}
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
};

export default ParticlesBackground;
