
import { } from '@wordpress/components';

const PriceCard = ({ attributes }) => {

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

                            <div key={index} className="plan">
                                <div className="price">{plan.title}</div>

                                <div className="price">{plan.price}</div>
                                <ul className="features">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>
                                            {console.log("Icon Class:", feature?.iconType)}
                                            <i className={feature?.iconType} style={{ color: feature.iconType === "fa-solid fa-circle-check" ? "green" : "red",marginRight:"10px" }}></i> 
                                             {feature.text}
                                        </li>
                                    ))}
                                </ul>
                                <button>{plan.buttonLabel}</button>
                            </div>
                        )}
                    </>
                ))};
            </div>


        </div>

    );
};

export default PriceCard;