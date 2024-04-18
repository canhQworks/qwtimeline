import React, { Fragment } from "react";
import isReact from "is-react";
import { Grid, Tooltip, Typography } from "@mui/material";

import { Button } from "@mui/material";
import { TimelineEventProps } from "./TimelineEvent.types";

const TimelineEvent: React.FC<TimelineEventProps> = ({
  classes,
  variant,
  first,
  color = "#e0e0e0",
  icon: Icon,
  title,
  time,
  action,
  timeProps,
  direction = "top",
  topic,
  description,
}) => {
  switch (variant) {
    case "small":
      return (
        <Grid sx={{ position: "relative" }}>
          <Fragment>
            <Tooltip
              title={
                <Grid sx={{ textAlign: "center" }}>
                  {title}
                  <br />
                  {time}
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
            {!first && <Grid />}
          </Fragment>
        </Grid>
      );
    case "simple":
      return (
        <Grid sx={{ position: "relative" }}>
          <Fragment>
            <Tooltip
              title={
                <Grid sx={{ textAlign: "center" }}>
                  {title}
                  <br />
                  {time}
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
        <Grid sx={{ position: "relative" }}>
          <Fragment>
            {direction == "top" ? (
              <>
                <Grid
                  sx={{
                    marginBottom: "16px",
                    textAlign: "center",
                    height: "58px",
                  }}
                >
                  {typeof topic === "string" ? (
                    <Typography variant="h6">{topic}</Typography>
                  ) : (
                    topic
                  )}
                  {typeof time === "string" ? (
                    <Typography variant="caption" {...timeProps}>
                      {time}
                    </Typography>
                  ) : (
                    time
                  )}
                </Grid>
                <div style={{ height: "272px", position: "relative" }}>
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
                  <svg
                    width="225"
                    height="152"
                    viewBox="0 0 225 152"
                    fill={color}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M112.503 0C131.833 0 147.503 15.67 147.503 35C147.503 54.33 131.833 70 112.503 70C93.1732 70 77.5032 54.33 77.5032 35C77.5032 15.67 93.1732 0 112.503 0Z"
                      fill={color}
                    />
                    <path
                      d="M114.003 120H111.003V70H114.003V120Z"
                      fill={color}
                    />
                    <path
                      d="M0.00244141 120H209.65L225.004 135.91L209.65 152H0.00244141L14.5477 135.91L0.00244141 120Z"
                      fill={color}
                    />
                    <path
                      d="M113 141C115.761 141 118 138.761 118 136C118 133.239 115.761 131 113 131C110.239 131 108 133.239 108 136C108 138.761 110.239 141 113 141Z"
                      fill="white"
                    />
                  </svg>
                  <Grid sx={{ position: "absolute", bottom: "0" }}>
                    {typeof title === "string" ? (
                      <Typography variant="h6">{title}</Typography>
                    ) : (
                      title
                    )}
                    {typeof description === "string" ? (
                      <Typography variant="caption">{description}</Typography>
                    ) : (
                      description
                    )}
                  </Grid>
                </div>
              </>
            ) : (
              <>
                <Grid
                  sx={{
                    marginBottom: "16px",
                    textAlign: "center",
                    height: "58px",
                  }}
                ></Grid>
                <div
                  style={{
                    height: "272px",
                    display: "flex",
                    alignItems: "end",
                    position: "relative",
                  }}
                >
                  <Grid sx={{ position: "absolute", top: "0" }}>
                    {typeof title === "string" ? (
                      <Typography variant="h6">{title}</Typography>
                    ) : (
                      title
                    )}
                    {typeof description === "string" ? (
                      <Typography variant="caption">{description}</Typography>
                    ) : (
                      description
                    )}
                  </Grid>
                  <svg
                    width="225"
                    height="152"
                    viewBox="0 0 225 152"
                    fill={color}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M112.503 152C131.833 152 147.503 136.33 147.503 117C147.503 97.67 131.833 82 112.503 82C93.1732 82 77.5032 97.67 77.5032 117C77.5032 136.33 93.1732 152 112.503 152Z"
                      fill={color}
                    />
                    <path d="M114.003 32H111.003V82H114.003V32Z" fill={color} />
                    <path
                      d="M0.00244141 32H209.65L225.004 16.0899L209.65 -1.26982e-07H0.00244141L14.5477 16.0899L0.00244141 32Z"
                      fill={color}
                    />
                    <path
                      d="M113 11C115.761 11 118 13.2386 118 16C118 18.7614 115.761 21 113 21C110.239 21 108 18.7614 108 16C108 13.2386 110.239 11 113 11Z"
                      fill="white"
                    />
                  </svg>
                  {Icon && (
                    <Icon
                      sx={{
                        position: "absolute",
                        bottom: "16px",
                        left: "92.5px",
                        fontSize: "40px",
                        color: "#fff",
                      }}
                    />
                  )}
                </div>

                <Grid sx={{ textAlign: "center" }}>
                  {typeof topic === "string" ? (
                    <Typography variant="h6">{topic}</Typography>
                  ) : (
                    topic
                  )}
                  {typeof time === "string" ? (
                    <Typography variant="caption" {...timeProps}>
                      {time}
                    </Typography>
                  ) : (
                    time
                  )}
                </Grid>
              </>
            )}

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
