// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id , device = "desktop"}) => {
	const { headerStyle } = attributes;
	const {titleColor,fontSize} = headerStyle;

	const mainSl = `#${id}`;
	const mainCardContener = `${mainSl} .main-card-contener`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${mainCardContener} h1{
			color: ${titleColor};
            font-size:${fontSize[device]}px;

		}

	`}} />;
}
export default Style;