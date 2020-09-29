import * as React from 'react';
import tinycolor from 'tinycolor2';
import { View } from 'react-native';

import { useTheme, withThemeProps } from '../../restyle';
import { useUpdateEffect } from '../../hooks';
import { isDark } from '../../utils';
import Button from '../Button';
import Flex from '../Flex';
import Icon from '../Icon';
import Grid from '../Grid';
import Slider from './Slider';
import { Label } from '../HTML';
import Touchable from '../Touchable';
import Overlay from '../Overlay';

const Gradient = ({ gradientSteps, maximumValue, getStepColor, ...rest }) => {
  const rows = [];
  for (let i = 0; i <= gradientSteps; i++) {
    rows.push(
      <View
        key={i}
        style={{
          flex: 1,
          backgroundColor: getStepColor((i * maximumValue) / gradientSteps),
          marginLeft: -1,
          marginRight: -1,
        }}
      />
    );
  }
  return (
    <Flex w="100%" h="100%" row {...rest}>
      {rows}
    </Flex>
  );
};

const HueGradient = ({ style, gradientSteps }) => {
  return (
    <Gradient
      style={style}
      gradientSteps={gradientSteps}
      getStepColor={(i) => tinycolor({ s: 1, l: 0.5, h: i }).toHslString()}
      maximumValue={359}
    />
  );
};

const SaturationGradient = ({ style, gradientSteps, color }) => {
  return (
    <Gradient
      style={style}
      gradientSteps={gradientSteps}
      getStepColor={(i) => tinycolor({ ...color, s: i }).toHslString()}
      maximumValue={1}
    />
  );
};

const LightnessGradient = ({ style, gradientSteps, color }) => {
  return (
    <Gradient
      style={style}
      gradientSteps={gradientSteps}
      getStepColor={(i) => tinycolor({ ...color, l: i }).toHslString()}
      maximumValue={1}
    />
  );
};

const Picker = ({ value = '#CCC', onChange, showVariants, saveAs }) => {
  const theme = useTheme();
  const [color, setColor] = React.useState(tinycolor(value).toHsl());

  useUpdateEffect(() => {
    if (onChange) {
      if (saveAs === 'hex') {
        onChange(tinycolor(color).toHexString());
      } else {
        onChange(tinycolor(color).toRgbString());
      }
    }
  }, [color]);

  const defaultColors = tinycolor(color)
    .monochromatic()
    .map((t) => t.toHexString());

  return (
    <Flex width="100%">
      <Label mb={5}>Selected Color</Label>
      <Flex
        w="100%"
        h={100}
        p={15}
        justifyContent="flex-end"
        alignItems="flex-start"
        borderRadius={theme.globals.roundness}
        borderColor="text"
        borderColorAlpha={0.05}
        style={{ backgroundColor: tinycolor(color).toHexString() }}
      >
        <Button
          bg={
            tinycolor(color).getBrightness() < 199
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(0,0,0,0.1)'
          }
          color={tinycolor(color).getBrightness() < 199 ? '#FFF' : '#000'}
        >
          {saveAs === 'hex'
            ? tinycolor(color).toHexString()
            : tinycolor(color).toRgbString()}
        </Button>
      </Flex>
      <Label mt={5}>Hue</Label>
      <Slider
        renderTrack={<HueGradient gradientSteps={50} />}
        value={color.h}
        max={359}
        onChange={(h) => setColor((c) => ({ ...c, h }))}
        onSwipe={(h) => setColor({ ...color, h })}
        //onSwipe={(v) => console.log(v)}
        showTicks={false}
        hideProgressTrack
      />
      <Label mt={5}>Lightness</Label>
      <Slider
        renderTrack={<LightnessGradient color={color} gradientSteps={50} />}
        value={color.l}
        max={1}
        steps={0.01}
        onChange={(l) => setColor((c) => ({ ...c, l }))}
        onSwipe={(l) => {
          setColor((c) => ({ ...c, l }));
        }}
        //onSwipe={(v) => console.log(v)}
        showTicks={false}
        hideProgressTrack
      />

      <Label mt={5}>Saturation</Label>
      <Slider
        renderTrack={<SaturationGradient color={color} gradientSteps={50} />}
        value={color.s}
        max={1}
        steps={0.01}
        onChange={(s) => setColor({ ...color, s })}
        onSwipe={(s) => setColor({ ...color, s })}
        //onSwipe={(v) => console.log(v)}
        showTicks={false}
        hideProgressTrack
      />
      {value && showVariants ? (
        <>
          <Label my={5}>Variants</Label>
          <Grid min={44} gap={theme.globals.gap / 2}>
            {defaultColors.map((col, index) => (
              <Touchable
                key={index}
                style={{
                  width: '100%',
                  height: 44,
                  borderRadius: 5,
                  backgroundColor: col,
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.1)',
                }}
                onPress={() => {
                  setColor(tinycolor(col).toHsl());
                }}
              />
            ))}
          </Grid>
        </>
      ) : null}
    </Flex>
  );
};

const Color = withThemeProps(
  ({
    theme,
    value,
    onChange,
    style,
    setFocus,
    overlayProps = {},
    inputProps = {},
    saveAs = 'hex',
    cancelText = 'Cancel',
    saveText = 'Save',
    showVariants = true,
    ...rest
  }) => {
    const [visible, setVisible] = React.useState(false);
    return (
      <Touchable
        height={44}
        style={{
          minWidth: 60,
          borderRadius: theme.globals.roundness,
          paddingHorizontal: 8,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.1)',
          alignItems: 'flex-end',
          justifyContent: 'center',
          backgroundColor: value || '#FFF',
        }}
        onPress={() => {
          setVisible(true);
        }}
        {...rest}
      >
        <Icon
          name="chevronDown"
          color={isDark(value || '#FFF') ? '#FFF' : '#000'}
          size={15}
        />
        <Overlay
          visible={visible}
          maxWidth={450}
          onClose={() => setVisible(false)}
        >
          <Picker
            value={value}
            field="color"
            saveAs={saveAs}
            showVariants={showVariants}
            onChange={(value) => {
              if (onChange) onChange(value);
            }}
          />
        </Overlay>
      </Touchable>
    );
  }
);

export default withThemeProps(Color, 'Color');
