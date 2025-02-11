import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { tt } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksModernSlides">

        </div>
      </div>
    </>
  );
};
export default Edit;
