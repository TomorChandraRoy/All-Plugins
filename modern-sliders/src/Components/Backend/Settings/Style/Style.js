
import { __ } from "@wordpress/i18n";
import {
  PanelBody, __experimentalSpacer as Spacer,
} from "@wordpress/components";
import {  BoxControl, ColorControl} from "../../../../../../bpl-tools/Components";
import { resetValues } from "../../../../utils/options";

const Style = ({ attributes, setAttributes }) => {


const{color,radiusValues,marginValues}=attributes;

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
    </>
  );
};

export default Style;
