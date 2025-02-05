import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalInputControl as InputControl, TextareaControl, } from '@wordpress/components';
import ItemsPanel from './../../../../../../bpl-tools/Components/ItemsPanel/ItemsPanel';
import { useCallback, } from 'react';
import { InlineMediaUpload, } from './../../../../../../bpl-tools/Components/MediaControl/MediaControl';


const General = ({ attributes, setAttributes, clientId }) => {



  const newItem = {
    image: "https://pixabay.com/photos/flowers-chamomile-summer-nature-8763039/",
    title: "New Modern Slide",
    description: "Some representative placeholder content for the new modern slide."
  };

  const ItemSettings = ({ index, attributes, setAttributes }) => {

    const items = attributes.modernSlides || [];

    const updateItem = useCallback((key, value) => {
      const updatedItems = [...items];
      updatedItems[index] = {
        ...updatedItems[index],
        [key]: value,
      };
      setAttributes({ modernSlides: updatedItems });
    }, [items, index, setAttributes]);



    return (
      <div>
        <InlineMediaUpload
          label="Image"
          value={items[index]?.image}
          onChange={(value) => updateItem('image', value)}
          onAltTextChange={(newAltText) => updateItem('alt', newAltText)}
          placeholder="Enter image URL"

        />

        <InputControl
          label="Title"
          value={items[index]?.title || ''}
          onChange={(value) => updateItem('title', value)}
          placeholder="Enter title"
        />
        <TextareaControl
          label="Description"
          value={items[index]?.description || ''}
          onChange={(value) => updateItem('description', value)}
          placeholder="Enter description"
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
          arrKey="modernSlides"
          newItem={newItem}
          ItemSettings={ItemSettings}
          itemLabel="Slide"
          design="sortable"
          clientId={clientId}
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
