import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import LinearProgress, {
  LinearProgressProps
} from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

const marks = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 10,
    label: "1"
  },
  {
    value: 20,
    label: "2"
  },
  {
    value: 30,
    label: "3"
  },
  {
    value: 40,
    label: "4"
  },
  {
    value: 50,
    label: "5"
  },
  {
    value: 60,
    label: "6"
  },
  {
    value: 70,
    label: "7"
  },
  {
    value: 80,
    label: "8"
  },
  {
    value: 90,
    label: "9"
  },
  {
    value: 100,
    label: "10"
  }
];

function valuetext(value) {
  return `${value}`;
}
function valueLabelFormat(value: number) {
  return marks.findIndex(mark => mark.value === value) + 0;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        How dedicated you are to your work?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />

      <Typography id="discrete-slider-restrict" gutterBottom>
        Are you good listener?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />

      <Typography id="discrete-slider-restrict" gutterBottom>
        How much do you understand your work?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="discrete-slider-restrict" gutterBottom>
        How offen do you manage to meet your deadlines at work?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="discrete-slider-restrict" gutterBottom>
        I understand why people are being difficult to?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />

      <Typography id="discrete-slider-restrict" gutterBottom>
        You are in sports?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />

      <Typography id="discrete-slider-restrict" gutterBottom>
        How comfortable you are to talk with stranger?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="discrete-slider-restrict" gutterBottom>
        How much did you rate yourself?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Are you are in mathematics?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Do you like television?
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />

      <Button href="#text-buttons" color="primary">
        NEXT
      </Button>
    </div>
  );
}
