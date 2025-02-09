import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";

const ModernSlider = ({ attributes, setAttributes }) => {

    const isEditor = useSelect((select) => select('core/editor'));

    const { items, tagName } = attributes;

    const updateItem = (index, key, value) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [key]: value };
        setAttributes({ items: newItems });
    };



    return (

        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {items.map((item, index) => (

                <>
                    <SwiperSlide key={index} className='slide-image'
                        style={{
                            backgroundImage: item.image ? `url(${item.image})` : "",
                            backgroundColor: item.image ? "" : "#595e5a",
                        }}>

                        <div className="overlay"></div>

                        <div className='slider-content'>

                            {isEditor ?
                                <RichText tagName={tagName} className='h3' value={item.title || "Heading..."} onChange={(value) => updateItem(index, "title", value)} placeholder=' Slider Title' /> : <div className='h1'>{item.title}</div>
                            }

                            {isEditor ?
                                <RichText className='dec' value={item.description || "Description.."} onChange={(value) => updateItem(index, "description", value)} placeholder='Slider description' /> : <p className='dec'>{item.description}</p>
                            }
                            <div className='buttonSection'>
                                {isEditor ? (
                                    item.buttonName && (
                                        <a
                                            href={item.buttonUrl || "#"}
                                            target={isEditor ? "_self" : "_blank"} onClick={(e) => isEditor && e.preventDefault()}
                                            rel="noopener noreferrer"
                                        >
                                            <button className='button'> <RichText value={item.buttonName} onChange={(value) => updateItem(index, "buttonName", value)} placeholder='button name' /></button>
                                        </a>
                                    )
                                ) : (
                                    item.buttonName && (
                                        <a
                                            href={item.buttonUrl || "#"}
                                            target={item.buttonNewTab ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                        >
                                            <button className='button'>{item.buttonName}</button>
                                        </a>
                                    )
                                )
                                }
                            </div>

                        </div>

                    </SwiperSlide>
                </>
            ))}
        </Swiper>
    );
};

export default ModernSlider;


