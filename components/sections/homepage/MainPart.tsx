import {Box, Typography, Stack} from '@mui/material';
import BouncingArrow from '../../animatedElements/BouncingArrow';

export default function MainPart(props) {
  return (
    <Box
      height="100vh"
      marginLeft={10}
      marginRight={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography variant="h2" component="h2" color="primary">
        Elizabeth BRICOUT
      </Typography>
      <Typography variant="h3" component="h3" color="secondary">
        Developer - Sysadmin - Writer
      </Typography>

      <Stack
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bottom={10}
        left="0"
        right="0"
        margin="0 auto"
      >
        <BouncingArrow sx={{fontSize: 40}} color="primary" />
        <Typography variant="caption" color="primary">
          Scroll me!
        </Typography>
      </Stack>
    </Box>
  );
}
