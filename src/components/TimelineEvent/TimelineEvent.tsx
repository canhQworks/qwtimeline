import React, { Fragment } from 'react'
import isReact from "is-react";
import { Grid, Tooltip, Typography } from "@mui/material";

import {
  Button
} from "@mui/material";
import { TimelineEventProps } from './TimelineEvent.types';

const styles = {
  container: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: 16,
    left: 92.5,
    fontSize: 40,
    color: '#fff'
  },
  iconSimple: {
    left: 16
  },
  iconSmall: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontSize: 16,
    color: '#e0e0e0'
  },
  circleContainer: {
    marginRight: 31
  },
  circleContainerSmall: {
    display: 'flex',
    flex: 'auto',
    alignItems: 'center',
    marginRight: 11,
  },
  action: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  tooltip: {
    textAlign: 'center'
  },
  barSimple: {
    position: 'absolute',
    top: '50%',
    left: -31,
    width: 31,
    height: 3,
    backgroundColor: '#f2f2f2'
  },
  barSmall: {
    position: 'absolute',
    top: '50%',
    left: -11,
    width: 11,
    height: 3,
    backgroundColor: '#f2f2f2'
  },
  textContainer: {
    marginTop: -40,
    textAlign: 'center'
  },
  actionContainer: {
    margin: '16px auto',
  },
  buttonContainer: {
    margin: '16px auto',
    textAlign: 'center'
  },
  button: {
    color: '#fff'
  }
}

const TimelineEvent: React.FC<TimelineEventProps>  = ({
  classes,
  variant,
  first,
  color = "#e0e0e0",
  icon: Icon,
  title,
  subtitle,
  action,
  titleProps,
  subtitleProps,
}) => {
  switch (variant) {
    case "small":
      return (
        <Grid  sx={{ position: "relative" }}>
          <Fragment>
            <Tooltip
              title={
                <Grid sx={{ textAlign: "center" }}>
                  {title}
                  <br />
                  {subtitle}
                </Grid>
              }
            >
              <Grid
                onClick={action && action.onClick}
               
                sx={{
                  display: "flex",
                  flex: "auto",
                  alignItems: "center",
                  marginRight: "11",
                  cursor: "pointer",
                }}
              >
                {Icon && (
                  <Icon
                 
                    style={{ color }}
                    sx={{
                      position: "absolute",
                      top: "8px",
                      left: "8px",
                      fontSize: "16px",
                      color: "#e0e0e0",
                    }}
                  />
                )}
                <svg width={32} height={32} viewBox="0 0 8.467 8.467">
                  <circle
                    cx={4.233}
                    cy={292.767}
                    r={4.035}
                    fill="#fff"
                    stroke={color}
                    strokeWidth={0.397}
                    transform="translate(0 -288.533)"
                  />
                </svg>
              </Grid>
            </Tooltip>
            {!first && <Grid  />}
          </Fragment>
        </Grid>
      );
    case "simple":
      return (
        <Grid  sx={{ position: "relative" }}>
          <Fragment>
            <Tooltip
              title={
                <Grid  sx={{ textAlign: "center" }}>
                  {title}
                  <br />
                  {subtitle}
                </Grid>
              }
            >
              <Grid
                onClick={action && action.onClick}
      
                sx={{ marginRight: "31px" }}
              >
                {Icon && (
                  <Icon
                 
                    sx={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      fontSize: "40px",
                      color: "#fff",
                    }}
                  />
                )}
                <svg viewBox="0 0 19.05 19.05" height={72} width={72}>
                  <g transform="translate(0 -277.95)">
                    <circle
                      cx={9.525}
                      cy={287.475}
                      r={9.525}
                      fill={color}
                      strokeWidth={0.193}
                    />
                  </g>
                </svg>
              </Grid>
            </Tooltip>
            {!first && (
              <Grid
              
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "-31px",
                  width: "31px",
                  height: "3px",
                  backgroundColor: "#f2f2f2",
                }}
              />
            )}
          </Fragment>
        </Grid>
      );
    default:
      return (
        <Grid  sx={{ position: "relative" }}>
          <Fragment>
            {Icon && (
              <Icon
              
                sx={{
                  position: "absolute",
                  top: "16px",
                  left: "92.5px",
                  fontSize: "40px",
                  color: "#fff",
                }}
              />
            )}
            <svg width={225} height={187} viewBox="0 0 59.531 49.477">
              <g transform="matrix(.99959 0 0 .99838 -100.96 -38.57)">
                <path
                  d="M101.002 69.656h55.492l4.064 4.158-4.064 4.205h-55.492l3.85-4.205z"
                  fill={color}
                  strokeWidth={0.24}
                />
                <circle
                  cx={130.726}
                  cy={73.838}
                  r={1.522}
                  fill="#fff"
                  strokeWidth={0.15}
                />
                <circle
                  cx={130.78}
                  cy={48.202}
                  r={9.57}
                  fill={color}
                  strokeWidth={0.194}
                />
                <rect
                  width={0.794}
                  height={14.363}
                  x={130.383}
                  y={56.309}
                  ry={0}
                  fill={color}
                  strokeWidth={0.108}
                />
              </g>
            </svg>
            <Grid
             
              sx={{ marginTop: "-40px", textAlign: "center" }}
            >
              {typeof title === "string" ? (
                <Typography variant="h6" {...titleProps}>
                  {title}
                </Typography>
              ) : (
                title
              )}
              {typeof subtitle === "string" ? (
                <Typography variant="caption" {...subtitleProps}>
                  {subtitle}
                </Typography>
              ) : (
                subtitle
              )}
            </Grid>
            {action && (
              <Grid
             
                sx={{
                  margin: "16px auto",
                }}
              >
                {isReact.compatible(action) ? (
                  action
                ) : (
                  <Grid
                 
                    sx={{
                      margin: "16px auto",
                      textAlign: "center",
                    }}
                  >
                    <Button
                      size="small"
                      onClick={action.onClick}
                 
                      style={{ backgroundColor: color }}
                      sx={{ color: "#fff" }}
                    >
                      {action.label}
                    </Button>
                  </Grid>
                )}
              </Grid>
            )}
          </Fragment>
        </Grid>
      );
  }
};

export default TimelineEvent;
