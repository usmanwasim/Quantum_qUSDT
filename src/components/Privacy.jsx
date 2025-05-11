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
import InfoIcon from "@mui/icons-material/Info";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import ShareIcon from "@mui/icons-material/Share";
import CookieIcon from "@mui/icons-material/Cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkIcon from "@mui/icons-material/Link";
import UpdateIcon from "@mui/icons-material/Update";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sections = [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      icon: <InfoIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            We may collect the following information from users:
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Personal Information:</strong> Name, email address, and
            contact details (if provided voluntarily).
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Wallet Information:</strong> Public cryptocurrency wallet
            addresses for participation in the presale.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Usage Data:</strong> Non-personal technical data such as IP
            address, browser type, and interaction behavior to improve user
            experience.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>KYC (Know Your Customer) Data:</strong> In the event KYC is
            required for regulatory compliance, we may collect identity
            documents, proof of address, and related verification information
            via a secure third-party provider.
          </Typography>
        </>
      ),
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Your Information",
      icon: <SecurityIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            We use your information for the following purposes:
          </Typography>
          <ul>
            <Typography component="li" variant="body1" paragraph>
              To facilitate participation in the qUSDT token presale.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To communicate important updates, confirmations, or project
              announcements.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To ensure compliance with applicable laws and regulations (e.g.,
              anti-money laundering and KYC requirements).
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To improve the functionality, usability, and security of our
              platform.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To prevent fraud, abuse, or malicious activity.
            </Typography>
          </ul>
        </>
      ),
    },
    {
      id: "data-storage-security",
      title: "3. Data Storage & Security",
      icon: <StorageIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          We implement appropriate industry-standard technical and
          organizational measures to secure your data from unauthorized access,
          alteration, disclosure, or destruction. All wallet and transaction
          data are stored on secure servers. Personal data used for KYC is
          processed via trusted and compliant third-party providers.
        </Typography>
      ),
    },
    {
      id: "sharing-information",
      title: "4. Sharing of Information",
      icon: <ShareIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            We do not sell, rent, or trade your personal information. However,
            we may share data with:
          </Typography>
          <ul>
            <Typography component="li" variant="body1" paragraph>
              <strong>Service Providers:</strong> For payment processing, KYC,
              or analytics purposes.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>Legal Authorities:</strong> When required to comply with
              laws or regulatory inquiries.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>Smart Contracts:</strong> Wallet addresses used in the
              presale may interact with smart contracts on the Ethereum or BNB
              networks. These interactions are publicly visible on-chain.
            </Typography>
          </ul>
        </>
      ),
    },
    {
      id: "cookies-tracking",
      title: "5. Cookies and Tracking",
      icon: <CookieIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          Our website may use cookies and other tracking tools to improve user
          experience and analyze site traffic. You may choose to disable cookies
          in your browser settings; however, this may limit some features of the
          site.
        </Typography>
      ),
    },
    {
      id: "your-rights",
      title: "6. Your Rights",
      icon: <AccountCircleIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            Depending on your jurisdiction, you may have rights under data
            protection laws, including:
          </Typography>
          <ul>
            <Typography component="li" variant="body1" paragraph>
              The right to access your personal information.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              The right to correct or delete your information.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              The right to withdraw consent at any time.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              The right to lodge a complaint with a data protection authority.
            </Typography>
          </ul>
          <Typography variant="body1" paragraph>
            To exercise any of these rights, please contact us at:{" "}
            <Link href="mailto:info@qusdt.net" color="primary">
              info@qusdt.net
            </Link>
          </Typography>
        </>
      ),
    },
    {
      id: "third-party-links",
      title: "7. Third-Party Links",
      icon: <LinkIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          Our website or platform may contain links to third-party sites or
          services. We are not responsible for the privacy practices or content
          of those sites. Please review their privacy policies separately.
        </Typography>
      ),
    },
    {
      id: "changes-to-policy",
      title: "8. Changes to This Policy",
      icon: <UpdateIcon color="primary" />,
      content: (
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal obligations. All updates will be posted on
          this page with the revised effective date. Continued use of our
          services constitutes acceptance of the revised policy.
        </Typography>
      ),
    },
    {
      id: "contact-us",
      title: "9. Contact Us",
      icon: <ContactMailIcon color="primary" />,
      content: (
        <>
          <Typography variant="body1" paragraph>
            For any questions, concerns, or requests related to this Privacy
            Policy, please contact us at:
          </Typography>
          <Typography variant="body1" paragraph>
            Email:{" "}
            <Link href="mailto:info@qusdt.net" color="primary">
              info@qusdt.net
            </Link>
            <br />
            Project: Quantum – qUSDT
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
            Privacy Policy
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
            Privacy Policy
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
            Quantum ("we", "our", "us") is committed to protecting the privacy
            and personal information of our users, participants, and
            stakeholders. This Privacy Policy outlines how we collect, use,
            store, and protect your information during your interaction with the
            qUSDT token presale and any associated services provided via our
            website or platform.
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
              Print Policy
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
            This Privacy Policy was last updated on May 1, 2025.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <Link href="mailto:info@qusdt.net" color="primary">
              info@qusdt.net
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
