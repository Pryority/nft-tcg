import { motion, MotionValue, useTransform } from 'framer-motion';
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
    }, [ref.current]);


    return (
        <Container ref={ref}>
            <motion.div style={{ rotate: direction }}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                </svg>
            </motion.div>
        </Container>
    );
};


export default Cell;