import { __ } from "@wordpress/i18n";
import {
  PanelBody,
} from "@wordpress/components";
import { ColorControl } from "../../../../../../bpl-tools/Components";



const Style = ({ attributes,setAttributes }) => {

const{ color} = attributes;


  return (
    <>
      <PanelBody

        className="bPlPanelBody"
        title={__("Slider", "b-blocks")}
        initialOpen={false}
      >
        <ColorControl
          label="Title Color"
          defaultColor="#eb40344f"
          value={color}
          onChange={(Cl) => {
            setAttributes({color: Cl});
          }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
