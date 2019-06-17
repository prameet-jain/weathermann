import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const styles = {
  radioLabel: {
    display: "block",
    textAlign: "center"
  }
};

function TemperatureControl(props) {
  const { classes, changeTempUnit, tempUnit } = props;

  function handleChange(event) {
    changeTempUnit(event.target.value);
  }

  return (
    <Grid container>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="position"
          name="position"
          value={tempUnit}
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

TemperatureControl.propTypes = {
  classes: PropTypes.object.isRequired,
  tempUnit: PropTypes.string.isRequired,
  changeTempUnit: PropTypes.func.isRequired
};

export default React.memo(withStyles(styles)(TemperatureControl));
