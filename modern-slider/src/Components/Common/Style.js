// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	
	const {descriptionGap,sliderHeight,color } = attributes;

	const mainSl = `#${id}`;
	const mySwiper = `${mainSl} .mySwiper`;
	const slideImage = `${mySwiper} .slide-image`;
	// const sliderContent = `${slideImage} .slider-content`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
       ${slideImage} .overlay{
           background-color:${color};
	   }

	`}} />;
}
export default Style;