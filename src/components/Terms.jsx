import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
  Link,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import PrintIcon from "@mui/icons-material/Print";
import GetAppIcon from "@mui/icons-material/GetApp";
import PersonIcon from "@mui/icons-material/Person";
import TokenIcon from "@mui/icons-material/Token";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WarningIcon from "@mui/icons-material/Warning";
import BlockIcon from "@mui/icons-material/Block";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CopyrightIcon from "@mui/icons-material/Copyright";
import DevicesIcon from "@mui/icons-material/Devices";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import UpdateIcon from "@mui/icons-material/Update";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const TermsOfUse = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sections = [
    {
      id: "eligibility",
      title: "1. Eligibility",
      icon: <PersonIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            By participating in the Quantum presale or accessing our website,
            you represent that:
          </Typography>
          <ul>
            <Typography component="li" variant="body1" paragraph>
              You are at least 18 years old or of legal age in your
              jurisdiction.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              You are not a citizen or resident of any jurisdiction where
              participation in token offerings is prohibited by law.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              You are not acting on behalf of any entity subject to sanctions or
              regulatory restrictions.
            </Typography>
          </ul>
        </>
      ),
    },
    {
      id: "nature-of-token",
      title: "2. Nature of the Token (qUSDT)",
      icon: <TokenIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            qUSDT is a fee-fueled, USD-pegged stablecoin built on the Ethereum
            blockchain and integrated with Quantum Swap. It is not an equity,
            security, or investment contract.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            Important: Participation in the presale should be based on personal
            judgment and is not to be considered a financial investment or
            guarantee of return. The price and utility of qUSDT may change based
            on market conditions and protocol development.
          </Typography>
        </>
      ),
    },
    {
      id: "presale-terms",
      title: "3. Presale Terms",
      icon: <ShoppingCartIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            Tokens purchased during the presale are offered at a discounted
            price ($0.25–$1.00) and will be subject to a vesting period of
            approximately 12 months.
          </Typography>
          <Typography variant="body1" paragraph>
            Tokens cannot be withdrawn, resold, or transferred during the
            vesting phase unless stated otherwise in the smart contract.
          </Typography>
          <Typography variant="body1" paragraph>
            By participating, you acknowledge and accept all vesting mechanics
            and the potential risks of loss.
          </Typography>
        </>
      ),
    },
    {
      id: "risk-disclosure",
      title: "4. Risk Disclosure",
      icon: <WarningIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            Participating in blockchain-based token projects involves
            significant risks, including:
          </Typography>
          <ul>
            <Typography component="li" variant="body1">
              Market volatility
            </Typography>
            <Typography component="li" variant="body1">
              Technical vulnerabilities (e.g., smart contract bugs)
            </Typography>
            <Typography component="li" variant="body1">
              Regulatory uncertainty
            </Typography>
            <Typography component="li" variant="body1">
              Partial or full loss of funds
            </Typography>
          </ul>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            You acknowledge and agree that you participate at your own risk, and
            Quantum will not be held liable for any damages or losses resulting
            from your participation.
          </Typography>
        </>
      ),
    },
    {
      id: "prohibited-conduct",
      title: "5. Prohibited Conduct",
      icon: <BlockIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            You agree not to:
          </Typography>
          <ul>
            <Typography component="li" variant="body1">
              Use the Services for any illegal or unauthorized purpose.
            </Typography>
            <Typography component="li" variant="body1">
              Attempt to access or tamper with smart contracts in a malicious
              way.
            </Typography>
            <Typography component="li" variant="body1">
              Interfere with the normal functioning of the website or blockchain
              network.
            </Typography>
            <Typography component="li" variant="body1">
              Violate any applicable laws or regulations.
            </Typography>
          </ul>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            We reserve the right to suspend or ban users who violate these
            Terms.
          </Typography>
        </>
      ),
    },
    {
      id: "no-financial-advice",
      title: "6. No Financial or Legal Advice",
      icon: <AccountBalanceIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          All content, materials, or communications from Quantum are for
          informational purposes only and do not constitute financial, legal, or
          investment advice. Always conduct your own research and consult with a
          licensed advisor before making decisions involving digital assets.
        </Typography>
      ),
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property",
      icon: <CopyrightIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          All content, trademarks, logos, and software on the Quantum website
          and platform are owned by or licensed to us. You may not copy,
          reproduce, or distribute any material without our prior written
          permission.
        </Typography>
      ),
    },
    {
      id: "third-party-services",
      title: "8. Third-Party Services",
      icon: <DevicesIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          Our platform may interact with third-party services (e.g., wallets,
          bridges, KYC providers). We are not responsible for any issues arising
          from the use of such third-party services.
        </Typography>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "9. Limitation of Liability",
      icon: <GavelIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          To the fullest extent permitted by law, Quantum and its affiliates
          shall not be liable for any indirect, incidental, consequential, or
          punitive damages arising from or related to your use of the Services,
          including lost profits, even if advised of the possibility of such
          damages.
        </Typography>
      ),
    },
    {
      id: "indemnification",
      title: "10. Indemnification",
      icon: <SecurityIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          You agree to indemnify and hold harmless Quantum, its team members,
          partners, and affiliates from any claims, liabilities, damages, or
          losses arising from your use of the Services or violation of these
          Terms.
        </Typography>
      ),
    },
    {
      id: "governing-law",
      title: "11. Governing Law",
      icon: <GavelIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          These Terms are governed by and construed in accordance with the laws
          of [Insert Jurisdiction]. Any disputes arising from or relating to
          these Terms shall be resolved in the courts of [Insert Jurisdiction].
        </Typography>
      ),
    },
    {
      id: "changes-to-terms",
      title: "12. Changes to These Terms",
      icon: <UpdateIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          Quantum reserves the right to update or modify these Terms at any
          time. Changes will take effect upon posting on our website. Continued
          use of the Services after updates constitutes acceptance of the
          revised Terms.
        </Typography>
      ),
    },
    {
      id: "contact-us",
      title: "13. Contact Us",
      icon: <ContactMailIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            For questions or concerns related to these Terms, please contact us
            at:
          </Typography>
          <Typography variant="body1" paragraph>
            Email:{" "}
            <Link href="mailto:info@qusdt.net" color="primary">
              info@qusdt.net
            </Link>
            <br />
            Website:{" "}
            <Link
              href="https://www.qusdt.net"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              www.qusdt.net
            </Link>
            <br />
            Project: Quantum – qUSDT
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 4 }}
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <DescriptionIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Terms of Use
          </Typography>
        </Breadcrumbs>

        {/* Header */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            mb: 4,
            borderRadius: 2,
            background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "primary.main",
            }}
          >
            Terms of Use
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Effective Date: May 2025
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Project Name: Quantum – qUSDT
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Website:{" "}
            <Link
              href="https://www.qusdt.net"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              www.qusdt.net
            </Link>
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" paragraph>
            These Terms of Use ("Terms") govern your access to and use of the
            Quantum – qUSDT website, presale platform, smart contracts, and
            related services (collectively, the "Services") provided by Quantum
            ("we," "us," or "our"). By using our Services, you agree to be bound
            by these Terms. If you do not agree, do not access or use the
            Services.
          </Typography>

          {/* Action buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              startIcon={<PrintIcon />}
              onClick={() => window.print()}
              sx={{
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Print Terms
            </Button>
            {/* <Button
              variant="outlined"
              startIcon={<GetAppIcon />}
              sx={{
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Download PDF
            </Button> */}
          </Box>
        </Paper>

        {/* Table of Contents for larger screens */}
        {!isTablet && (
          <Paper
            elevation={2}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Table of Contents
            </Typography>
            <Box
              component="nav"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  underline="hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "text.primary",
                    py: 0.5,
                  }}
                >
                  {section.icon}
                  <Typography sx={{ ml: 1 }}>{section.title}</Typography>
                </Link>
              ))}
            </Box>
          </Paper>
        )}

        {/* Content */}
        <Box sx={{ mb: 6 }}>
          {isMobile ? (
            // Mobile view - Accordion
            <Paper
              elevation={2}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              {sections.map((section, index) => (
                <Accordion
                  key={section.id}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  disableGutters
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                    sx={{
                      px: 3,
                      py: 2,
                      bgcolor:
                        expanded === `panel${index}`
                          ? "rgba(0, 0, 0, 0.03)"
                          : "transparent",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {section.icon}
                      <Typography
                        variant="subtitle1"
                        sx={{ ml: 1, fontWeight: 500 }}
                      >
                        {section.title}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, py: 2 }}>
                    {section.content}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          ) : (
            // Desktop view - Sections
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 2,
              }}
            >
              {sections.map((section, index) => (
                <Box
                  key={section.id}
                  id={section.id}
                  sx={{ mb: index < sections.length - 1 ? 5 : 0 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    {section.icon}
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        ml: 1,
                        fontWeight: 600,
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  {section.content}
                </Box>
              ))}
            </Paper>
          )}
        </Box>

        {/* Footer */}
        <Paper
          elevation={1}
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: "background.paper",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            These Terms of Use were last updated on May 1, 2025.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            If you have any questions about these Terms, please contact us at{" "}
            <Link href="mailto:info@qusdt.net" color="primary">
              info@qusdt.net
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsOfUse;
