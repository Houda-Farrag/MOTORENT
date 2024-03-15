import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
// import { CardImage, CardTitle } from "@wellbiiDashboard/common";
import { useNavigate } from "react-router-dom";


const accordionData = [
  {
    title: "Front - End Development",
    description: "Front - End Development Course for...",
  },
  {
    title: "Front - End Development",
    description: "Front - End Development Course for...",
  },
  {
    title: "Front - End Development",
    description: "Front - End Development Course for...",
  },
  {
    title: "Front - End Development",
    description: "Front - End Development Course for...",
  },
  {
    title: "Front - End Development",
    description: "Front - End Development Course for...",
  },
  {
    title: "Front - End Development",
    description: "Front - End Development Course for...",
  },
  {
    title: "Front - End Development",
    description: "Front - End Development Course for...",
  },
];

export const RentedCars= () => {
    const rentedCar=1;
   const navigate= useNavigate()
    if(rentedCar) {
  return (
   
    <div>
      <Accordion
        disableGutters
        className="accordion-container"
        defaultExpanded
        sx={{ border: "none !important" }}
      >
        <AccordionSummary
          className="accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box className="accordion-header">
            {/* <CardImage
              imgWidth={80}
              imgHeight={80}
              image="https://res.cloudinary.com/dnsare3ik/image/upload/v1706466079/WellBii/profile-placeholder_rif1m1.png"
            />
            <CardTitle text="Front - End Development" /> */}
          </Box>
        </AccordionSummary>

        <Box>
          {accordionData.map((data, index) => (
            <AccordionDetails key={index} className="accordion-details">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "200px",
                  alignItems: "center",
                }}
              >
                <Typography>{data.title}</Typography>
                <Typography>{data.description}</Typography>
              </Box>
            </AccordionDetails>
          ))}
        </Box>
      </Accordion>
    </div>
  );
            }
            else {
return<>
<Box height={"100%"}
  width={`calc(100% - 5%)` }
  sx={{
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <h3 >
    You do not rent
  </h3>
  <Button
    size="large"
    sx={{
      mt: 5,
      font: "Plus Jakarta Sans",
      fontWeight: 600,
      justifyContent: "center",
    }}
    onClick={() => {
      navigate("./cars");
    }}
    type="submit"
    variant="contained"
  >
    Rent Now
  </Button>
</Box>
</>


            }
};