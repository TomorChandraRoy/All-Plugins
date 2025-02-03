import { useSelect } from '@wordpress/data';

const PriceCard = ({ attributes }) => {
    
    const isEditor = useSelect((select) => select('core/editor')); // Editor Mode Detect

    const { plans, title, description, showUpdateDelete } = attributes;

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

                                <h2>{plan.title}</h2>

                                <div className="price">{plan.price}</div>
                                <ul className="features">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>
                                            <i className={feature?.iconType} style={{ color: feature.iconType === "fa-solid fa-circle-check" ? " #6ab04c" : feature.iconType === "fa fa-times-circle" ? "#eb4d4b" : "rgba(39, 154, 67, 0.86)", marginRight: "10px" }}></i>
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                                <a href={plan?.buttonUrl} target="_blank" rel="noopener noreferrer">
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