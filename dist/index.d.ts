/// <reference types="react" />
import React$1 from 'react';

interface TimelineProps {
    children?: any;
    classes?: any;
    variant?: any;
    height?: any;
    minEvents?: any;
    maxEvents?: any;
    placeholder?: any;
    PerfectScrollbarProps?: any;
}

declare const Timeline: React$1.FC<TimelineProps>;

interface TimelineEventProps {
    classes?: any;
    variant?: any;
    first?: any;
    color?: any;
    icon?: any;
    topic?: any;
    topicProps?: any;
    time?: any;
    timeProps?: any;
    timeCurrentProps?: any;
    title?: any;
    titleProps?: any;
    description?: any;
    descriptionProps?: any;
    action?: any;
    direction?: string;
    isCurrent?: boolean;
    statusIcon?: React.ReactNode;
}

declare const TimelineEvent: React$1.FC<TimelineEventProps>;

export { Timeline, TimelineEvent };
