import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import Header from "../../common/Header";
import { Formik } from "formik";
import * as yup from "yup";

export default function NewUser() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  const phoneRegex =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const userSchema = yup.object().shape({
    firstName: yup.string().label("First Name").required(),
    lastName: yup.string().label("Last Name").required(),
    email: yup.string().label("Email").email().required(),
    contact: yup.string().label("Phone Number").matches(phoneRegex).required(),
    address1: yup.string().label("Primary Address").required(),
    address2: yup.string().label("Primary Address"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Header title="create user" subtitle="Create a New User Profile" />
      <Box display="grid" gridTemplateColumns={!isMobile && "70% 30%"}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat (4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isMobile ? "span 4" : undefined },
                }}
              >
                <TextField
                  fullWidth
                  color="secondary"
                  name="firstName"
                  variant="filled"
                  type="text"
                  label="First Name*"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  color="secondary"

                  name="lastName"
                  variant="filled"
                  type="text"
                  label="Last Name*"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  color="secondary"

                  name="email"
                  variant="filled"
                  type="text"
                  label="Email Address*"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  color="secondary"

                  name="contact"
                  variant="filled"
                  type="text"
                  label="Phone Number*"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  color="secondary"

                  name="address1"
                  variant="filled"
                  type="text"
                  label="Address1*"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  color="secondary"

                  name="address2"
                  variant="filled"
                  type="text"
                  label="Address2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        <Box pl="20px">
          <Box
            component="img"
            src="/assets/interview.jpg"
            alt="interviewing"
            sx={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              transform: "scale(-1, 1)"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
