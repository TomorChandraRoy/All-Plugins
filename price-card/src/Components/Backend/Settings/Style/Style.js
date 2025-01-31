import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { ColorControl, Typography } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {

  const { headerStyle,} = attributes;

  console.log(headerStyle);

  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });


  return (
    <>
      <PanelBody

        className="bPlPanelBody"
        title={__("Purpose styles title", "b-blocks")}
        initialOpen={false}
      >

        <ColorControl
          label="Title Color"
          defaultColor="#000000"
          value={headerStyle?.titleColor}
          onChange={(Color) => {
            setAttributes({
              headerStyle: { ...headerStyle, titleColor: Color },
            });
          }}
        />

        <BoxControl values={values} onChange={setValues} />
      </PanelBody>

      <PanelBody
          className="bPlPanelBody"
          title={__("Typography Components", "b-blocks")}
          initialOpen={false}
        >
          <Typography label={__('Label', 'b-blocks')} value={headerStyle}
           onChange={(size) => setAttributes({ headerStyle:{headerStyle:size}})}
          />

        </PanelBody>
    </>
  );
};

export default Style;
