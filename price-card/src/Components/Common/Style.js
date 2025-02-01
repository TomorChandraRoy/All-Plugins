// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id, }) => {
	const { headerStyle, headerDecStyle, planStyle } = attributes;
	const { titleColor, fontSize, titleMargin, titleAlign } = headerStyle;
	const { decColor, decSize, decAlign, decMargin } = headerDecStyle;

	const { planBackgroundColor, planBackgroundColorOpacity, planPadding, planMargin, planRadius, planAlign, planTitleStyle, planPriceStyle, FeaturesStyle, buttonStyle } = planStyle;

	const { planTitleColor, planTitleSize, planTitleMargin } = planTitleStyle;

	const { priceColor, priceSize, priceAlign, priceMargin } = planPriceStyle;

	const { featureAlign, featureliMagin } = FeaturesStyle;

	const { buttonBackgroundColor,buttonBackgroundColorOpacity, buttonPadding, buttonFontSize, buttonBorderRadius, buttonColor, buttonMargin } = buttonStyle;


	const mainSl = `#${id}`;
	const mainCardContener = `${mainSl} .main-card-contener`;
	const pricing = `${mainCardContener} .pricing`;
	const plan = `${pricing} .plan`;
	const price = `${plan} .price`;
	const features = `${plan} .features`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${mainCardContener}{
		}
		${mainCardContener} h1{
			color: ${titleColor};
			font-size: ${fontSize}px;
			margin: ${titleMargin?.top} ${titleMargin?.right} ${titleMargin?.bottom} ${titleMargin?.left};
			text-align:${titleAlign};
			}
		${mainCardContener} p{
			color: ${decColor};
            font-size: ${decSize}px;
			margin: ${decMargin?.top} ${decMargin?.right} ${decMargin?.bottom} ${decMargin?.left};
			text-align:${decAlign};
			}

		${pricing}{
			display: flex;
			flex-wrap: wrap;
			justify-content: ${planAlign};
			font-family: "Source Sans Pro", sans-serif;
		}

		${plan}{
			background: ${planBackgroundColor?.includes('gradient') ? planBackgroundColor : `${planBackgroundColor}`};
			opacity: ${planBackgroundColorOpacity};
			padding: ${planPadding?.top} ${planPadding?.right} ${planPadding?.bottom} ${planPadding?.left};
			margin: ${planMargin?.top} ${planMargin?.right} ${planMargin?.bottom} ${planMargin?.left};
            border-radius: ${planRadius?.top} ${planRadius?.right} ${planRadius?.bottom} ${planRadius?.left};
			
		}
		${plan} h2{
			color: ${planTitleColor};
            font-size: ${planTitleSize}px;
			margin: ${planTitleMargin?.top} ${planTitleMargin?.right} ${planTitleMargin?.bottom} ${planTitleMargin?.left};
		}
		${price} {
			color: ${priceColor};
            font-size: ${priceSize}px;
			margin: ${priceMargin?.top} ${priceMargin?.right} ${priceMargin?.bottom} ${priceMargin?.left};
			text-align:${priceAlign};
		}
		${features} {
			text-align:${featureAlign};
		}
		${features} li{
			margin: ${featureliMagin?.top} ${featureliMagin?.right} ${featureliMagin?.bottom} ${featureliMagin?.left};
		}

		${plan} button{
			background: ${buttonBackgroundColor?.includes('gradient') ? buttonBackgroundColor : `${buttonBackgroundColor}`};
			opacity: ${buttonBackgroundColorOpacity};
			font-size: ${buttonFontSize}px;
		    padding: ${buttonPadding?.top} ${buttonPadding?.right} ${buttonPadding?.bottom} ${buttonPadding?.left};
			margin: ${buttonMargin?.top} ${buttonMargin?.right} ${buttonMargin?.bottom} ${buttonMargin?.left};
			border-radius: ${buttonBorderRadius?.top} ${buttonBorderRadius?.right} ${buttonBorderRadius?.bottom} ${buttonBorderRadius?.left};
            
		}
	`}} />;
}
export default Style;