import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

const Marque = ({ data, title, onClick = false }) => {
  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: "background.default",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 700,
          mb: 5,
        }}
      >
        {title}
      </Typography>
      <Marquee pauseOnHover={true} autoFill={true} gradient={true}>
        {data.map((item, i) => (
          <Box
            key={i}
            component="img"
            src={item.image}
            alt={"img"}
            onClick={() => item.link && window.open(item.link, "_blank")}
            sx={{
              cursor: onClick && "pointer",
              objectFit: "contain",
              width: "200px",
              mx: 2,
            }}
          />
        ))}
      </Marquee>
    </Box>
  );
};

export default Marque;
