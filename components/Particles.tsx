import React from 'react';
import Particles, { MoveDirection, OutMode } from 'react-particles-js';
import styles from './Particles.module.css';


const ParticlesBackground: React.FC = () => (
    <Particles
        className={styles.particles}
        params={
            {
        infection: {enable: true},
        particles: {
            number: {
                value: 15,
                density: {
                    enable: true
                }
            },
            color: {
                value: '#0055ff'
            },
            size: {
                value: 2,
                random: true
            },
            collisions: {
                enable: true,
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 1
                }
            },
            rotate: {
                random: true
            },
            opacity: {
                value: 70
            },
            move: {
                direction: 'top' as MoveDirection,
                out_mode: 'bounce' as OutMode,
                speed: 2
            },
            line_linked: {
                enable: true,
                color: '#004488'
            }
        }
        }}
    />
)

export default ParticlesBackground;