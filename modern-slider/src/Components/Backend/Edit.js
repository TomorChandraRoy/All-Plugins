import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ModernSlider from "../Common/ModernSlider";
import { withSelect } from '@wordpress/data';



const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

          <ModernSlider attributes={attributes} setAttributes={setAttributes}/>
  
      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
