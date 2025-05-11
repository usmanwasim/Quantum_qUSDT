import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const roadmapData = [
  {
    phase: "Phase 1: Q2 2025",
    title: "Project Launch",
    items: [
      "Token Smart Contract Development",
      "Website and Whitepaper Release",
      "Community Building Initiatives",
      "Initial Marketing Campaign",
      "Presale Launch",
    ],
    completed: true,
  },
  {
    phase: "Phase 2: Q3 2025",
    title: "Platform Development",
    items: [
      "Token Launch on Decentralized Exchanges",
      "Staking Platform Beta Release",
      "Mobile Wallet Development",
      "Strategic Partnerships",
      "Community Expansion",
    ],
    completed: true,
  },
  {
    phase: "Phase 3: Q4 2025",
    title: "Ecosystem Expansion",
    items: [
      "DEX Integration",
      "NFT Marketplace Launch",
      "Cross-Chain Bridge Implementation",
      "Major Exchange Listings",
      "Marketing Campaign Expansion",
    ],
    completed: false,
  },
  {
    phase: "Phase 4: Q1 2026",
    title: "Global Adoption",
    items: [
      "DAO Governance Implementation",
      "DeFi Lending Platform Launch",
      "Enterprise Partnership Program",
      "Global Marketing Campaign",
      "Ecosystem Grants Program",
    ],
    completed: false,
  },
];

const Roadmap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Mobile view
  const MobileRoadmap = () => (
    <Stepper orientation="vertical">
      {roadmapData.map((phase, index) => (
        <Step key={index} active={true} completed={phase.completed}>
          <StepLabel>
            <Typography variant="h6" fontWeight={600}>
              {phase.phase}
            </Typography>
            <Typography variant="subtitle1" color="primary.main">
              {phase.title}
            </Typography>
          </StepLabel>
          <StepContent>
            <Box sx={{ mb: 2 }}>
              <ul style={{ paddingLeft: "20px" }}>
                {phase.items.map((item, idx) => (
                  <li key={idx}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );

  // Desktop view
  const DesktopRoadmap = () => (
    <Timeline position="alternate">
      {roadmapData.map((phase, index) => (
        <TimelineItem key={phase.phase}>
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h6" component="span" fontWeight={600}>
              {phase.phase}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {phase.title}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              color={phase.completed ? "success" : "primary"}
              variant={phase.completed ? "filled" : "outlined"}
            />
            {index < roadmapData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {phase.items.map((item, idx) => (
                  <li key={idx}>
                    <Typography
                      variant="body2"
                      paragraph
                      sx={{ mb: idx === phase.items.length - 1 ? 0 : 1 }}
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );

  return (
    <Box
      id="roadmap"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Roadmap
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Our journey to revolutionize the financial ecosystem
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
          {isMobile ? <MobileRoadmap /> : <DesktopRoadmap />}
        </Box>
      </Container>
    </Box>
  );
};

export default Roadmap;
