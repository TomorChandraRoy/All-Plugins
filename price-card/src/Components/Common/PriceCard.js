import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";
import { updateData } from '../../utils/functions';
import { produce } from 'immer';

const PriceCard = ({ attributes, setAttributes }) => {

    const isEditor = useSelect((select) => select('core/editor')); // Editor Mode Detect

    const { plans, title, description, showUpdateDelete } = attributes;
    
    // Upodate Feature
    const updateFeature = (planIndex, featureIndex, value, type) => {
        setAttributes({
          plans: produce(plans, draft => {
            draft[planIndex].features[featureIndex][type] = value;
          })
        })
      };


    return (
        <div className="main-card-contener" >
            {
                showUpdateDelete ?
                    <>
                        <h1>{title}</h1>
                        <p>
                            {description}
                        </p>
                    </>
                    : ""
            }

            <div className="pricing">
                {plans.map((plan, index) => (
                    <>
                        {plan.isVisible && (

                            <div key={index} className={`plan ${plan.title === "Pro" && plan.isPopular ? "popular" : ""}`}>
                                {plan.title === "Pro" ?
                                    <span className='' >
                                        {
                                            plan.isPopular === true
                                                ? "Most Popular" : ""
                                        }
                                    </span> : ""
                                }

                                {isEditor ?
                                    <RichText className='h2' value={plan.title} onChange={(v) => setAttributes({ plans: updateData(plans, v, index, 'title') })} /> : <RichText className='h2' value={plan.title} />
                                }

                                {/* {isEditor ?
                                    <RichText  value={} onChange={(v) => setAttributes({ plans: updateData(plans, v, index, 'price') })} /> : 
                                } */}


                                {isEditor ?
                                    <RichText className="price" value={plan.price} onChange={(v) => setAttributes({ plans: updateData(plans, v, index, 'price') })} /> : <div className="price">{plan.price}</div>
                                }

                                <ul className="features">
                                    {plan.features.map((feature, featureIndex) => (
                                        <>
                                            {isEditor ?
                                                <li className='li'>
                                                    <i className={feature?.iconType} style={{ color: feature.iconType === "fa-solid fa-circle-check" ? " #6ab04c" : feature.iconType === "fa fa-times-circle" ? "#eb4d4b" : "rgba(39, 154, 67, 0.86)", marginRight: "10px" }}></i>
                                                    <RichText value={feature.text}
                                                     onChange={(value) => updateFeature(index, featureIndex, value, "text")} />
                                                </li>

                                                : <li key={featureIndex}>
                                                    <i className={feature?.iconType} style={{ color: feature.iconType === "fa-solid fa-circle-check" ? " #6ab04c" : feature.iconType === "fa fa-times-circle" ? "#eb4d4b" : "rgba(39, 154, 67, 0.86)", marginRight: "10px" }}></i>
                                                    {feature.text}
                                                </li>
                                            }
                                        </>
                                    ))}
                                </ul>
                                <a
                                    href={plan.buttonUrl}
                                    target={isEditor ? "_self" : "_blank"} // Editor Mode হলে লিংক Disable থাকবে
                                    rel="noopener noreferrer"
                                    onClick={(e) => isEditor && e.preventDefault()} // Backend এ লিংক কাজ করবে না
                                >
                                    <button >{plan.buttonLabel}</button>
                                </a>
                            </div >
                        )}
                    </>
                ))}
            </div>


        </div >

    );
};

export default PriceCard;