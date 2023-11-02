import { tokens } from "@/src/theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../common/Header";
import { ExpandMore } from "@mui/icons-material";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Header title="FAQ" subtitle="Frequently Asked Question" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            How to Add New Users
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            First go to &#34;New User&#34; Page, then fill all the field, then
            click the submit button
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Add New Event into Calendar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to &#34;Calendar&#34; Page, click on the date you want to add
            event. Title prompt will appear, fill the title field and choose
            &#34;OK&#34;.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            See Member Access Level
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can see other member access level on &#34;Manage Team&#34; page
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
