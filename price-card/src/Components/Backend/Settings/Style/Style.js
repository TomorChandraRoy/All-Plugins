import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalSpacer as Spacer,
  PanelRow,
  RangeControl,
} from "@wordpress/components";
import { ColorControl, Label, SolidBackground } from "../../../../../../bpl-tools/Components";
import { AlignmentToolbar } from "@wordpress/block-editor";
import { BDevice } from "../../../../../../bpl-tools/Components/Deprecated";
import { useState } from 'react';




const Style = ({ attributes, setAttributes, device }) => {

  const [devicee, setDevice] = useState('desktop');

  const { headerStyle, headerDecStyle, planStyle, columns } = attributes;


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
          onChange={(v) => {
            setAttributes({ headerStyle: { ...headerStyle, fontSize: v } });
          }}
        />

        <Spacer marginBottom="20px" />

        <AlignmentToolbar value={headerStyle.titleAlign} onChange={val => { setAttributes({ headerStyle: { ...headerStyle, titleAlign: val }, }) }} describedBy={__('Block Name Alignment')} alignmentControls={[
          { title: __(' Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
          { title: __(' Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
          { title: __(' Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
        ]} />

        <Spacer marginBottom="20px" />

        <BoxControl label="Margin" values={headerStyle?.titleMargin} onChange={(margin) => {
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
          onChange={(v) => {
            setAttributes({ headerDecStyle: { ...headerDecStyle, decSize: v } });
          }}
        />

        <AlignmentToolbar value={headerDecStyle.decAlign} onChange={val => { setAttributes({ headerDecStyle: { ...headerDecStyle, decAlign: val }, }) }} describedBy={__('Block Name Alignment')} alignmentControls={[
          { title: __(' Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
          { title: __(' Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
          { title: __(' Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
        ]} />

        <Spacer marginBottom="20px" />

        <BoxControl label="Margin" values={headerDecStyle?.decMargin} onChange={(margin) => {
          setAttributes({
            headerDecStyle: { ...headerDecStyle, decMargin: margin }
          })
        }} />

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Plan Style", "b-blocks")}
        initialOpen={false}
      >
        <SolidBackground
          label="Background Color"
          value={planStyle?.planBackgroundColor}
          onChange={(value) => {
            setAttributes({ planStyle: { ...planStyle, planBackgroundColor: value } })
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={planStyle?.planBackgroundColorOpacity || 1}
          label="Background Opacity"
          step={0.1}
          max={1}
          min={0.1}
          onChange={(v) => {
            setAttributes({ planStyle: { ...planStyle, planBackgroundColorOpacity: v } });
          }}
        />
        <Spacer marginBottom="20px" />

        <BoxControl label="Padding" values={planStyle?.planPadding} onChange={(padding) => {
          setAttributes({
            planStyle: { ...planStyle, planPadding: padding }
          })
        }} />

        <Spacer marginBottom="20px" />

        <BoxControl label="Margin" values={planStyle?.planMargin} onChange={(margin) => {
          setAttributes({
            planStyle: { ...planStyle, planMargin: margin }
          })
        }} />

        <Spacer marginBottom="20px" />

        {/*BorderControl  */}
        <BoxControl label="Border" values={planStyle?.planRadius}
          onChange={(newValues) => {
            setAttributes({ planStyle: { ...planStyle, planRadius: newValues } });
          }}
        />

        <Spacer marginBottom="20px" />

        <AlignmentToolbar label="Plan Content" value={planStyle.planAlign} onChange={val => { setAttributes({ planStyle: { ...planStyle, planAlign: val }, }) }} describedBy={__('Block Name Alignment')} alignmentControls={[
          { title: __(' Plan in left', 'textdomain'), align: 'left', icon: 'align-left' },
          { title: __(' Plan in center', 'textdomain'), align: 'center', icon: 'align-center' },
          { title: __(' Plan in right', 'textdomain'), align: 'right', icon: 'align-right' }
        ]} />

      </PanelBody>

      {/* <PanelBody
        className="bPlPanelBody"
        title={__("Plan Style", "b-blocks")}
        initialOpen={false}
      >

      </PanelBody> */}
    </>
  );
};

export default Style;
