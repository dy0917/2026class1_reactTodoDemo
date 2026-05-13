import { useState } from "react";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import { FormControl, FormControlLabel, InputLabel } from "@mui/material";
export default function MUIForm() {
  const [age, setAge] = useState(10);

  const onSubmitAction = (e) => {
    e.preventDefault();
    console.log("Form submitted with age:", age);
  };
  return (
    <form
      onSubmit={onSubmitAction}
    >
      <Grid>
        <TextField
          required
          id="outlined-required"
          label="Greeting"
          defaultValue="Hello World"
        />
      </Grid>
      <Grid>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Uncheck Me"
        />
      </Grid>
      <Grid>
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Select value={age} onChange={(e) => setAge(e.target.value)}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
}
