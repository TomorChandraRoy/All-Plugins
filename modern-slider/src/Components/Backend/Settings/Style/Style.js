import { __ } from "@wordpress/i18n";
import {
  PanelBody, SelectControl, __experimentalSpacer as Spacer,
  TextControl,
} from "@wordpress/components";
import { BoxControl, ColorControl,  Typography } from "../../../../../../bpl-tools/Components";
import { resetValues } from "../../../../utils/options";



const Style = ({ attributes, setAttributes }) => {

  const { color, marginValues, radiusValues,typography,headeingColor,headeingMarginValues, selectedAnimation,animationDelay, animationDuration } = attributes;



  const handleSelectChange = (newAnimation) => {
    setAttributes({ selectedAnimation: newAnimation });
  };
  const handleDelayChange = (newDelay) => {
    setAttributes({ animationDelay: parseFloat(newDelay) });
  };

  const handleDurationChange = (newDuration) => {
    setAttributes({ animationDuration: parseFloat(newDuration) });
  };
  return (
    <>
      <PanelBody

        className="bPlPanelBody"
        title={__("Slider", "b-blocks")}
        initialOpen={false}
      >
        <ColorControl
          label="Overly Color"
          defaultColor="#4429274f"
          value={color}
          onChange={(Cl) => {
            setAttributes({ color: Cl });
          }}
        />
        <Spacer />
        {/* BoxControl Padding/Margin korte parbo*/}
        <BoxControl
          label="Margin"
          values={marginValues}
          resetValues={resetValues}
          // sides={["horizontal","vertical"]}
          // disableUnits={false}
          onChange={(newValues) => setAttributes({ marginValues: newValues })}
        />

        <Spacer />
        {/* BoxControl Padding/Margin korte parbo*/}
        <BoxControl
          label="Radius"
          values={radiusValues}
          resetValues={resetValues}
          // sides={["horizontal","vertical"]}
          // disableUnits={false}
          onChange={(newValues) => setAttributes({ radiusValues: newValues })}
        />
      </PanelBody>

      <PanelBody

        className="bPlPanelBody"
        title={__("Title", "b-blocks")}
        initialOpen={false}
      >
        <Typography label={__('Label', 'b-blocks')} value={typography} onChange={val => setAttributes({ typography: val })} />

        <ColorControl
          label="Color"
          defaultColor="#ffffff"
          value={headeingColor}
          onChange={(Clo) => {
            setAttributes({ headeingColor: Clo });
          }}
        />
        <Spacer />

        <BoxControl
          label="Margin"
          values={headeingMarginValues}
          resetValues={resetValues}
          // sides={["horizontal","vertical"]}
          // disableUnits={false}
          onChange={(newValues) => setAttributes({ headeingMarginValues: newValues })}
        />
        <Spacer />
        <SelectControl
            label="Select Animation"
            value={selectedAnimation}
            options={[
              { label: 'Side In Left', value: 'side-in-left' },
              { label: 'Side In Right', value: 'side-in-right' },
              { label: 'Side In Up', value: 'side-in-up' },
              { label: 'Side In Down', value: 'side-in-down' },
              { label: 'Fade In Left', value: 'fade-in-left' },
              { label: 'Fade In Right', value: 'fade-in-right' },
              { label: 'Fade In Up', value: 'fade-in-up' },
              { label: 'Fade In Down', value: 'fade-in-down' },
              { label: 'Zoom In', value: 'zoom-in' },
              { label: 'Fade In', value: 'fade-in' }
            ]}
            onChange={handleSelectChange}
          />
            <Spacer />
          <TextControl
            label="Animation Delay (seconds)"
            type="number"
            value={animationDelay}
            onChange={handleDelayChange}
            min="0"
          />
            <Spacer />
          <TextControl
            label="Animation Duration (seconds)"
            type="number"
            value={animationDuration}
            onChange={handleDurationChange}
            min="0"
          />
      </PanelBody>
    </>
  );
};

export default Style;
