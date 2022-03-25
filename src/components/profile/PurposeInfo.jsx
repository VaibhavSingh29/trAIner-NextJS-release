import { Container, Radio, Typography, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { purposes } from "../../../data/updateProfile";

const PurposeInfo = () => {
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h5">
        Add or Update Personal Information
      </Typography>
      <Typography variant="h6" color="textSecondary" className="p-4">
        Purpose
      </Typography>

      <Formik initialValues={{ purpose: [] }}>
        {({ values }) => (
          <Form>
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-center"
            >
              {purposes.map((purpose) => (
                <label>
                  <Field
                    name="purpose"
                    type="radio"
                    value={purpose.option}
                    as={Radio}
                  />
                  {purpose.option}
                </label>
              ))}
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Grid>
          </Form>
        )}
      </Formik>
      <Button
        onClick={() => {
          router.push("/profile?step=4", undefined, { shallow: true });
        }}
      >
        Next
      </Button>
    </Container>
  );
};

export default PurposeInfo;
