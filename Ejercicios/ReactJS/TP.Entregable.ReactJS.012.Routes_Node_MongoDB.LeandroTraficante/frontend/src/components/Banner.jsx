import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

function Banner() {
    const [backgroundColor, setBackgroundColor] = useState('#ff0000');

    const generateRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setBackgroundColor(generateRandomColor());
        }, 5000);

        return () => clearInterval(timer);
    }, []);


    return (
        <Box
            sx={{
                backgroundColor: backgroundColor,
                padding: '10px 20px',
                textAlign: 'center',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    color: 'white',
                    margin: 0,
                    fontSize: '16px',
                    fontWeight: 'normal'
                }}
            >
                Tecnología y eficiencia a su alcance
            </Typography>
        </Box>
    );
}

export default Banner;