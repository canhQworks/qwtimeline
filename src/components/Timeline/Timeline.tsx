import React, { Children, cloneElement, Component, Fragment, useEffect, useRef } from 'react'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { CssBaseline } from "@mui/material";


import {
  Grid,

} from "@mui/material";
import { TimelineProps } from './Timeline.types';
import Placeholder from './Placeholder';
// import Placeholder from './Placeholder';

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    display: 'inline-flex',
    flex: '1 1 auto'
  },
  middle: {
    marginLeft: -10
  }
}

const renderPlaceholders = (props: any) => {
  const {
    classes,
    difference: quantity,
    variant = 'default',
    childrenWithProps
  } = props

  if (quantity) {
    const placeholders = []
    let index = 0

    while (index < quantity) {
      switch (variant) {
        case 'small':
          placeholders.push(
            // <PlaceholderSmall
            //   key={index}
            //   first={index === 0}
            //   quantity={childrenWithProps.length}
            // />
          )
          break
        case 'simple':
          placeholders.push(
            // <PlaceholderSimple
            //   key={index}
            //   first={index === 0}
            //   quantity={childrenWithProps.length}
            // />
          )
          break
        default:
          placeholders.push(
            <Grid
              key={index}
              className={classes?.middle}
              sx={{ marginLeft: "-10px", paddingTop: "78px" }}
            >
              <Placeholder />
            </Grid>
          );
          break
      }

      index++
    }

    return placeholders
  }
}

const Timeline: React.FC<TimelineProps> = ({
  children,
  classes,
  variant = "default",
  height = variant === "small" ? 95 : variant === "simple" ? 135 : "auto",
  minEvents = 0,
  maxEvents = 0,
  placeholder,
  PerfectScrollbarProps,
}) => {
  const difference = children ? minEvents - children.length : minEvents;
  const childrenWithProps = children
    ? Children.map(children, (child, index) =>
        cloneElement(child, {
          variant,
          placeholder,
          first: index === 0,
        })
      )
    : [];
  const placeholders = renderPlaceholders({
    classes,
    difference,
    variant,
    childrenWithProps,
  });
  const scrollbarRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // Mimic componentDidMount behavior for scroll position
  //   if (scrollbarRef.current) {
  //     scrollbarRef.current.scrollLeft = scrollbarRef.current.offsetWidth;
  //   }
  // }, [children, variant, placeholder]);

  return (
    <Grid sx={{ position: "relative", overflow: "hidden" }} style={{ height }}>
      <PerfectScrollbar {...PerfectScrollbarProps}>
        <CssBaseline />
        <Grid
          sx={{ display: "inline-flex", flex: "1 1 auto", paddingLeft: "16px", flexDirection: "column" }}
          className={classes?.container}
        >
          {maxEvents ? (
            <Fragment>
              {childrenWithProps.map((child: any, index: any) => {
                return (
                  <Fragment key={index}>
                    {index < maxEvents && (
                      <Grid
                        className={clsx({
                          [classes?.middle]:
                            variant === "default" &&
                            index > 0 &&
                            index < children.length,
                        })}
                        sx={{marginLeft: "-16px"}}
                      >
                        {child}
                      </Grid>
                    )}
                  </Fragment>
                );
              })}
            </Fragment>
          ) : (
            <Fragment>
              {childrenWithProps.map((child: any, index: number) => {
                return (
                  <Grid
                    key={index}
                    className={clsx({
                      [classes?.middle]:
                        variant === "default" &&
                        index > 0 &&
                        index < children.length,
                    })}
                    sx={{marginLeft: "-16px"}}
                  >
                    {child}
                  </Grid>
                );
              })}
            </Fragment>
          )}
          {minEvents > 0 && difference > 0 && placeholder && placeholders}
        </Grid>
      </PerfectScrollbar>
    </Grid>
  );
};

export default Timeline;
