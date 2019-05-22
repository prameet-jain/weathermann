import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  radioLabel: {
    display: "block",
    textAlign: "center"
  }
});

function TemperatureControl() {
  const classes = useStyles();
  const [value, setValue] = React.useState("f");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Grid container>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="position"
          name="position"
          value={value}
          onChange={handleChange}
          row
        >
          <Grid item xs={6}>
            <FormControlLabel
              value="c"
              control={<Radio color="primary" />}
              label="Celcius"
              className={classes.radioLabel}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              value="f"
              control={<Radio color="primary" />}
              label="Fahrenheit"
              className={classes.radioLabel}
            />
          </Grid>
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

export default TemperatureControl;
