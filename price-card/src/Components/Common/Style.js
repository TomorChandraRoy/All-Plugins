// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id,  }) => {
	const { headerStyle,headerDecStyle} = attributes;
	const { titleColor, fontSize,titleMargin,titleAlign } = headerStyle;
	const { decColor, decSize,decAlign,decMargin } = headerDecStyle;

	const mainSl = `#${id}`;
	const mainCardContener = `${mainSl} .main-card-contener`;

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
	`}} />;
}
export default Style;