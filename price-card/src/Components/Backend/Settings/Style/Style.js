import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalSpacer as Spacer,
  PanelRow,
  RangeControl,
} from "@wordpress/components";
import { ColorControl, Label } from "../../../../../../bpl-tools/Components";
import { AlignmentToolbar } from "@wordpress/block-editor";
import { BDevice } from "../../../../../../bpl-tools/Components/Deprecated";
import { useState } from 'react';




const Style = ({ attributes, setAttributes, device }) => {

  const [devicee, setDevice] = useState('desktop');

  const { headerStyle, headerDecStyle, columns } = attributes;


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Responsive Components", "b-blocks")}
        initialOpen={false}
      >
        {/* BDevice */}
        <PanelRow>
          <Label className='mb5'>{__('Columns:', 'b-blocks')}</Label>
          <BDevice device={devicee} onChange={val => setDevice(val)} />
        </PanelRow>
        <RangeControl value={columns[device]} onChange={val => setAttributes({ columns: { ...columns, [device]: val } })} min={1} max={6} step={1} beforeIcon='grid-view' />
      </PanelBody>

      <PanelBody

        className="bPlPanelBody"
        title={__("Header Style", "b-blocks")}
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

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={headerStyle?.fontSize}
          label="Font Size"
          max={100}
          min={1}
          onChange={(v) =>{
            setAttributes({headerStyle:{ ...headerStyle, fontSize:v }});
          }}
        />

        <Spacer marginBottom="20px" />

        <AlignmentToolbar value={headerStyle.titleAlign} onChange={val => { setAttributes({ headerStyle: { ...headerStyle, titleAlign: val }, }) }} describedBy={__('Block Name Alignment')} alignmentControls={[
          { title: __(' Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
          { title: __(' Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
          { title: __(' Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
        ]} />

        <Spacer marginBottom="20px" />

        <BoxControl values={headerStyle?.titleMargin} onChange={(margin) => {
          setAttributes({
            headerStyle: { ...headerStyle, titleMargin: margin }
          })
        }} />

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Header Dec Style", "b-blocks")}
        initialOpen={false}
      >
        <ColorControl
          label="Title Color"
          defaultColor="#000000"
          value={headerDecStyle?.decColor}
          onChange={(Color) => {
            setAttributes({
              headerDecStyle: { ...headerDecStyle, decColor: Color },
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={headerDecStyle?.decSize}
          label="Font Size"
          max={100}
          min={1}
          onChange={(v) =>{
            setAttributes({headerDecStyle:{ ...headerDecStyle, decSize:v }});
          }}
        />

        <AlignmentToolbar value={headerDecStyle.decAlign} onChange={val => { setAttributes({ headerDecStyle: { ...headerDecStyle, decAlign: val }, }) }} describedBy={__('Block Name Alignment')} alignmentControls={[
          { title: __(' Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
          { title: __(' Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
          { title: __(' Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
        ]} />

        <Spacer marginBottom="20px" />

        <BoxControl values={headerDecStyle?.decMargin} onChange={(margin) => {
          setAttributes({
            headerDecStyle: { ...headerDecStyle, decMargin: margin }
          })
        }} />

      </PanelBody>

      {/* <PanelBody
        className="bPlPanelBody"
        title={__("Typography Components", "b-blocks")}
        initialOpen={false}
      >

      </PanelBody> */}
    </>
  );
};

export default Style;
