import React, { Fragment } from "react";
import isReact from "is-react";
import { Grid, Popover, Tooltip, Typography } from "@mui/material";

import { Button } from "@mui/material";
import { TimelineEventProps } from "./TimelineEvent.types";

const TimelineEvent: React.FC<TimelineEventProps> = ({
  classes,
  variant,
  first,
  color = "#e0e0e0",
  icon: Icon,
  topic,
  topicProps,
  time,
  timeProps,
  title,
  titleProps,
  description,
  descriptionProps,
  action,
  direction = "top",
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
                    position: "absolute",
                    top: "40px",
                    left: "60px",
                    right: "0",
                    textAlign: "left",
                    height: "58px",
                    zIndex: "9999999999",
                  }}
                >
                  {typeof time === "string" ? (
                    <Typography variant="caption" {...timeProps}>
                      {time}
                    </Typography>
                  ) : (
                    time
                  )}

                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid item xs={9}>
                      {typeof title === "string" ? (
                        <Typography variant="h6" {...titleProps}>
                          {title}
                        </Typography>
                      ) : (
                        title
                      )}
                    </Grid>
                    <Grid item xs={3} style={{ color: "#5555DC" }}>
                      {Icon && description && (
                        <Typography
                          aria-owns={open ? "mouse-over-popover" : undefined}
                          aria-haspopup="true"
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}
                        >
                          <Icon />
                        </Typography>
                      )}

                      <Popover
                        id={"mouse-over-popover"}
                        sx={{
                          pointerEvents: "none",
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <Typography sx={{padding: "8px"}} {...description}>{description}</Typography>
                      </Popover>
                    </Grid>
                  </Grid>
                </Grid>
                <div style={{ height: "128px", position: "relative" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="246"
                    height="128"
                    viewBox="0 0 246 128"
                    fill="none"
                  >
                    <path
                      d="M40.3868 63.9999L37.5 61.1132L34.6132 63.9999L37.5 66.8867L40.3868 63.9999ZM13.5 64.4999H37.5V63.4999H13.5V64.4999Z"
                      fill={color}
                      fill-opacity="0.88"
                    />
                    <path
                      d="M5 128L5 4.76837e-06"
                      stroke={color}
                      stroke-width="4"
                      stroke-linejoin="round"
                    />
                    <circle cx="4.5" cy="64" r="4" fill="#FFD533" />
                    <circle
                      cx="4.5"
                      cy="64"
                      r="3.5"
                      stroke="black"
                      stroke-opacity="0.88"
                    />
                    <defs>
                      <clipPath id="clip0_15044_1464">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(223.5 70)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  <Grid sx={{ position: "absolute", top: "0", width: "100%" }}>
                    {typeof title === "string" ? (
                      <Typography variant="h6" {...titleProps}>
                        {title}
                      </Typography>
                    ) : (
                      title
                    )}
                    {typeof description === "string" ? (
                      <Typography variant="caption" {...descriptionProps}>
                        {description}
                      </Typography>
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
                    <Typography variant="h6" {...topicProps}>
                      {topic}
                    </Typography>
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
