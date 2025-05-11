import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is qUSDT (Quantum)?",
    answer:
      "qUSDT, also known as Quantum, is a next-generation USD-pegged stablecoin built on the Ethereum network. Unlike traditional stablecoins, qUSDT is fee-fueled — powered by real swap fees collected from Quantum Swap across Ethereum and BNB chains, offering holders passive value growth and deep DeFi utility.",
  },
  {
    question: "How is qUSDT different from USDT or USDC?",
    answer:
      "While USDT and USDC are strictly fiat-backed and static in value, qUSDT is dynamic. It maintains a stable $1.00 peg but earns additional value through swap fees, which are used to strengthen liquidity and support long-term value. This creates a profitable stablecoin experience for holders.",
  },
  {
    question: "How does the presale work?",
    answer:
      "During the presale (vesting phase), users can buy qUSDT tokens at a discounted rate between $0.25 and $1.00. These tokens are subject to a ~12-month vesting period, after which they will be fully liquid and stabilized at $1.00.",
  },
  {
    question: "Why is there a vesting period?",
    answer:
      "The vesting period aligns early supporters with the long-term vision of the project. It helps maintain price stability, prevents pump-and-dump activity, and ensures gradual integration of qUSDT into the broader ecosystem.",
  },
  {
    question: "What happens after the vesting period?",
    answer:
      "Once the vesting period ends, all qUSDT tokens will be stabilized at a fixed price of $1.00. Token holders will then be able to use qUSDT in DeFi, trading, payments, and more — with the added benefit of fee-driven value backing.",
  },
  {
    question: "Where can I buy qUSDT?",
    answer:
      "qUSDT is currently available for purchase during the presale on the official Quantum website. After the vesting period, it will also be tradable on Quantum Swap and other decentralized exchanges.",
  },
  {
    question: "Which blockchain does qUSDT run on?",
    answer:
      "qUSDT is launched on the Ethereum network (ERC-20) and will be bridged to the BNB Chain (BEP-20). This allows for cross-chain compatibility and broader DeFi utility.",
  },
  {
    question: "How are swap fees used to benefit qUSDT holders?",
    answer:
      "All fees collected from trading on Quantum Swap are pooled and used to:",
    points: [
      "Strengthen the liquidity backing of qUSDT",
      "Stabilize the $1.00 peg through buybacks",
      "Grow treasury reserves for long-term sustainability",
    ],
  },
  {
    question: "Do I need to complete KYC to participate?",
    answer:
      "Depending on your region and the platform’s compliance requirements, you may be required to complete KYC verification through a secure third-party provider. Full details are provided at the time of presale registration.",
  },
  {
    question: "Is qUSDT audited and secure?",
    answer:
      "Yes, qUSDT’s smart contracts and platform integrations will be audited by leading security firms before the token becomes fully liquid. We prioritize security, transparency, and long-term trust with our community.",
  },
  {
    question: "Can I use qUSDT in DeFi applications?",
    answer: "Absolutely. Once live, qUSDT can be used for:",
    points: [
      "Trading on decentralized exchanges",
      "Yield farming and liquidity pools",
      "Payments and transfers",
      "Staking (future roadmap)",
    ],
  },
  {
    question: "How can I stay updated with the project?",
    answer: "Stay connected with the Quantum team via:",
    points: [
      "Website: www.qusdt.net",
      "Email: info@qusdt.net",
      "Telegram: [Check on the Official Website]",
      "Twitter: [Check on the Official Website]",
    ],
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
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
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
            }}
          >
            Find answers to the most common questions about our token presale
          </Typography>
          <Divider
            sx={{
              width: "80px",
              mx: "auto",
              borderColor: "primary.main",
              borderWidth: 2,
            }}
          />
        </Box>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                borderRadius: "8px",
                "&:before": {
                  display: "none",
                },
                boxShadow: expanded === `panel${index}` ? 3 : 1,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  borderRadius: "8px",
                  "&.Mui-expanded": {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              >
                <Typography variant="h6" fontWeight={500}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
                {faq.points && (
                  <ul style={{ paddingLeft: "20px" }}>
                    {faq.points.map((point, idx) => (
                      <li key={idx}>
                        <Typography variant="body1" color="text.secondary">
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
