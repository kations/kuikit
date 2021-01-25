import React from 'react';
import Svg from 'react-native-svg';
import { scaleLinear, scaleBand } from 'd3-scale';

import Flex from '../Flex';
import Axis from '../Axis';
import { withThemeProps } from '../../restyle';
import { useLayout, useGesture } from '../../hooks';
import { isNumber, getProgress, getValueByProgress } from '../../utils';

import Line from './Line';
import Bar from './Bar';
import Pie from './Pie';
import Grid from './Grid';
import GridLine from './GridLine';
import Indicator from './Indicator';

const getValue = (d, key) => {
  if (d[key] !== undefined && d[key] !== null && isNumber(d[key])) {
    return d[key];
  } else if (d && isNumber(d)) {
    return d;
  } else {
    return 0;
  }
};

const getDomain = (domain) => [Math.min(...domain), Math.max(...domain)];

const getDomainY = ({ data, keys, yZero }) => {
  const domain = yZero ? [0] : [];

  data.map((d) => {
    keys.map((key) => {
      let value = getValue(d, key);
      if (value !== undefined && isNumber(value)) {
        domain.push(value);
      }
    });
  });
  return getDomain(domain);
};

const Chart = ({
  children,
  data,
  keyProps,
  height,
  contentInset = { bottom: 0, top: 20, left: 0, right: 0 },
  xAxis = false,
  xAxisPadding = 5,
  xTicks,
  useScaleBand = false,
  yAxis = false,
  yAxisPadding = 5,
  yTicks,
  yZero = true,
  legend,
  formatX,
  formatY,
  yDomain,
  minChartWidth,
  wrapperProps = {},
  domainX,
  domainXPadding = 0.1,
  valueOverlay = false,
  gesture = true,
  mouse = true,
  ...rest
}) => {
  const { onLayout, width } = useLayout();
  const [progress, setProgress] = React.useState(1);
  const [pan, setPan] = React.useState(false);

  const keys = React.Children.toArray(children).map((c) => {
    if (c && c.props && c.props.dataKey) return c.props.dataKey;
  });

  const scaleY = React.useMemo(
    () =>
      scaleLinear()
        .domain(yDomain || getDomainY({ data, keys, yZero }))
        .range([height - contentInset.bottom, contentInset.top]),
    [data, keys, width, minChartWidth]
  );

  const scaleX = React.useMemo(
    () =>
      useScaleBand
        ? scaleBand()
            .domain(
              domainX
                ? [...Array(domainX[1]).keys()]
                : [...Array(data.length).keys()]
            )
            .range([contentInset.left, width - contentInset.right])
            .padding(domainXPadding)
        : scaleLinear()
            .domain(domainX || getDomain(data.map((d, i) => i)))
            .range([contentInset.left, width - contentInset.right]),
    [data, keys, width, minChartWidth]
  );

  const offset = scaleX.bandwidth ? scaleX.bandwidth() : 0;

  const setProgressValue = ({ dist }) => {
    let newProgress = getProgress(0, width - offset, dist - offset / 2);
    if (newProgress < 0) {
      newProgress = 0;
    } else if (newProgress > 1) {
      newProgress = 1;
    }
    setProgress(newProgress);
  };

  const bindGesture = useGesture(
    {
      onMoveShouldSetPanResponderCapture: (e, { dy, dx }) => {
        return Math.abs(dx) > 5;
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e, { dy, dx }) => {
        const dist = e.nativeEvent.locationX;
        setProgressValue({ dist });
        setTimeout(() => {
          setPan(true);
        }, 10);
      },
      onPanResponderMove: (e, { dy, dx }) => {
        const dist = progress * width + dx;
        setProgressValue({ dist });
      },
      onPanResponderRelease: (e, { vx, vy }) => {
        setPan(false);
      },
    },
    [width, pan]
  );

  return (
    <Flex width="100%" row {...rest}>
      {yAxis && (
        <Axis
          orient="LEFT"
          scale={scaleY}
          height={height}
          padding={yAxisPadding}
          ticks={yTicks}
          formatTick={(v) => {
            if (formatY) {
              return formatY(v);
            }
            return v;
          }}
        />
      )}
      <Flex flex={1}>
        <Flex
          width="100%"
          onLayout={onLayout}
          height={height}
          position="relative"
          collapsable={false}
          onMouseOver={
            mouse
              ? (e) => {
                  setPan(true);
                }
              : undefined
          }
          onMouseMove={
            mouse
              ? (e) => {
                  const { layerX } = e.nativeEvent;
                  setProgressValue({ dist: layerX });
                }
              : undefined
          }
          onMouseLeave={
            mouse
              ? () => {
                  setPan(false);
                }
              : undefined
          }
          {...(gesture ? bindGesture : {})}
          {...wrapperProps}
        >
          {width > 0 && (
            <Svg
              style={{
                width: '100%',
                height: height,
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                borderRadius: wrapperProps.borderRadius,
              }}
            >
              {React.Children.toArray(children).map((c, i) => {
                if (c) {
                  return React.cloneElement(c, {
                    ...c.props,
                    data,
                    width,
                    height,
                    scaleY,
                    scaleX,
                    domainX,
                    contentInset,
                    keys,
                    progress,
                    pan,
                    offset,
                    gesture,
                  });
                }
              })}
            </Svg>
          )}
        </Flex>
        {xAxis && (
          <Axis
            scale={scaleX}
            useScaleBand={useScaleBand}
            height={height}
            width={width}
            padding={xAxisPadding}
            ticks={xTicks || data.length}
            formatTick={(d) => {
              if (typeof data[d] === 'undefined') return '';
              if (formatX) {
                return formatX(data[d], d);
              }
              return data[d].label || d;
            }}
          />
        )}
      </Flex>
    </Flex>
  );
};

const ChartWithTheme = withThemeProps(Chart, 'Chart');

ChartWithTheme.Line = Line;
ChartWithTheme.Bar = Bar;
ChartWithTheme.Grid = Grid;
ChartWithTheme.Indicator = Indicator;
ChartWithTheme.GridLine = GridLine;

export default ChartWithTheme;
