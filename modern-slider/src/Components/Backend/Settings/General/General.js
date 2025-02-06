import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalInputControl as InputControl, TextareaControl, __experimentalSpacer as Spacer, ToggleControl } from '@wordpress/components';
import ItemsPanel from './../../../../../../bpl-tools/Components/ItemsPanel/ItemsPanel';
// import { useCallback, } from 'react';
import { InlineMediaUpload, } from './../../../../../../bpl-tools/Components/MediaControl/MediaControl';



const General = ({ attributes, setAttributes, clientId }) => {


  const ItemSettingsComponent = ({ attributes, setAttributes, arrKey, index }) => {
    const items = attributes[arrKey];
    const currentItem = items[index];

    const updateItem = (key, value) => {
      const updatedItems = [...items];
      updatedItems[index] = { ...updatedItems[index], [key]: value };
      setAttributes({ [arrKey]: updatedItems });
    };


    return (
      <div>
        {/* <InlineMediaUpload
          label="Image"
          value={currentItem?.image}
          onChange={(value) => updateItem('image', value)}
          onAltTextChange={(newAltText) => updateItem('alt', newAltText)}
          placeholder="Enter image URL"

        /> */}

        <InlineMediaUpload
          label="Image"
          value={currentItem?.image}
          onChange={(value) => {
            updateItem('image', value);
            if (!currentItem?.alt) {
              updateItem('alt', 'Default alt text for image');
            }
          }}
          onAltTextChange={(newAltText) => updateItem('alt', newAltText)}
          placeholder="Enter image URL"

        />
        <Spacer />

        <InputControl
          label="Image Alt"
          value={currentItem.alt || ''}
          onChange={(value) => updateItem('alt', value)}
          placeholder="Enter alt text"
        />

        <Spacer />

        <InputControl
          label="Title"
          value={currentItem.title || ''}
          onChange={(value) => updateItem('title', value)}
          placeholder="Enter title"
        />
        <Spacer />
        <TextareaControl
          label="Description"
          value={currentItem?.description || ''}
          onChange={(value) => updateItem('description', value)}
          placeholder="Enter description"
        />

        <Spacer />

        <InputControl
          label="Button Label"
          value={currentItem?.buttonName || ''}
          onChange={(value) => updateItem('buttonName', value)}
          placeholder="Enter Button Name"
        />
        <Spacer />

        <InputControl
          label="Button URL"
          value={currentItem?.buttonUrl || ''}
          onChange={(value) => updateItem('buttonUrl', value)}
          placeholder="Enter URL"
        />
        <Spacer />


        <ToggleControl
          label="Open In New Tab"
          checked={currentItem?.buttonNewTab || false}
          onChange={() => updateItem('buttonNewTab', !currentItem?.buttonNewTab)}
        />

      </div>
    );
  };


  return (
    <>

      <PanelBody className='bPlPanelBody' title={__('Slides', 'b-blocks')} initialOpen={false}>


        <ItemsPanel
          attributes={attributes}
          setAttributes={setAttributes}
          clientId={clientId}
          arrKey="items"
          newItem={{
            title: "New Slide",
            description: " Description here ",
            image: "https://cdn.pixabay.com/photo/2024/02/28/15/14/ai-generated-8602228_1280.jpg",
            buttonName: "name..",
            buttonUrl: "https://www.facebook.com/"
          }}
          itemLabel="Slide"
          activeIndex={attributes.activeIndex}
          setActiveIndex={index => setAttributes({ activeIndex: index })}
          ItemSettings={ItemSettingsComponent}
          design='sortable'

        />

      </PanelBody>



      <PanelBody className='bPlPanelBody' title={__('Title', 'b-blocks')} initialOpen={false}>

      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('LayOut Settings', 'b-blocks')} initialOpen={false}>

      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Slider Option', 'b-blocks')} initialOpen={false}>

      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Indicator', 'b-blocks')} initialOpen={false}>

      </PanelBody>

    </>
  );
};

export default General;
