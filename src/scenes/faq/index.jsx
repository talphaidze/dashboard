import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Recommendations" subtitle="Recommendations on your energy consumption" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Lighting
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lighting consumption has been up by 15%.
            You can save energy by turning lights off at hours 12pm-3pm.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Wet Appliances
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wet Appliances consumption has been up by 30%.
            You can save energy by switching wet appliance consumption to every couple of days.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Cold Appliances
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cold Appliances performance has been down 30%. Well done!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Consumer Electronics
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Consumer Electronics consumption has been stable. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Cooking
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cooking consupmtion has been done 5%. Well done!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;