import { motion, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

export const CELL_SIZE = 60;

const Container = styled.div`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  color: #cae3db;
  opacity: 62%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Cell = ({ mouseX, mouseY }) => {
    const [position, setPosition] = useState([0, 0]);
    const ref = useRef(null);

    const direction = useTransform(
        [mouseX, mouseY],
        ([newX, newY]) => {
            const diffY = newY - position[1];
            const diffX = newX - position[0];
            const angleRadians = Math.atan2(diffY, diffX);
            const angleDegrees = Math.floor(angleRadians * (180 / Math.PI));
            return angleDegrees;
        }
    );

    useEffect(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // center x coordinate
        const x = rect.left + CELL_SIZE / 2;
        // center y coordinate
        const y = rect.top + CELL_SIZE / 2;
        setPosition([x, y]);
    }, []);


    return (
        <Container ref={ref}>
            <motion.div style={{ rotate: direction }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                </svg>
            </motion.div>
        </Container>
    );
};


export default Cell;