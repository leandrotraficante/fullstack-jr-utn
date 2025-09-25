import React from 'react';
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialLinks = () => {
    return (
        <Stack direction="row" justifyContent="center" spacing={2}>
            <IconButton color="primary" component="a" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
            </IconButton>
            <IconButton color="primary" component="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
            </IconButton>
            <IconButton color="primary" component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
            </IconButton>
        </Stack>
    );
};

export default SocialLinks;
