import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Cell, { CELL_SIZE } from './Cell';
import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from 'framer-motion';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  mask-image: radial-gradient(
        300px 300px,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.4),
        transparent
    );
    mask-repeat: no-repeat;
`;

function Grid() {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const centerMouseX = useTransform(mouseX, (newX) => {
        return newX - window.innerWidth / 2;
    });
    const centerMouseY = useTransform(mouseY, (newY) => {
        return newY - window.innerHeight / 2;
    });
    const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`;

    // handle mouse move on document
    useEffect(() => {
        const handleMouseMove = (e) => {
            // animate mouse x and y
            animate(mouseX, e.clientX);
            animate(mouseY, e.clientY);
        };
        // recalculate grid on resize
        window.addEventListener('mousemove', handleMouseMove);
        // cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    // determine rows and columns
    useEffect(() => {
        const calculateGrid = () => {
            const columnCount = Math.ceil(window.innerWidth / CELL_SIZE);
            setColumns(columnCount);
            const rowCount = Math.ceil(window.innerHeight / CELL_SIZE);
            setRows(rowCount);
        };
        // calculate the grid on load
        calculateGrid();
        // recalculate grid on resize
        window.addEventListener('resize', calculateGrid);
        // cleanup
        return () => {
            window.removeEventListener('resize', calculateGrid);
        };
    }, []);

    return (
        <Container columns={columns} style={{ WebkitMaskPosition }}>
            {Array.from({ length: columns * rows }).map((_, i) => (
                <Cell key={i} mouseX={mouseX} mouseY={mouseY} />
            ))}
        </Container>
    );
}

export default Grid;