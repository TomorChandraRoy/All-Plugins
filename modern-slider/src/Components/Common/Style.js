// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';
import { getTypoCSS } from '../../../../bpl-tools/utils/getCSS';
const Style = ({ attributes, id }) => {

	const {color,marginValues,radiusValues,typography, headeingColor,headeingMarginValues, animationDelay, animationDuration,device = "desktop"} = attributes;

	const { fontFamily, fontCategory, fontSize, fontVariant, fontWeight, textDecoration, textTransform, fontStyle, letterSpace,lineHeight} = typography

	const mainSl = `#${id}`;
	// const swiper = `${mainSl} .swiper`;
	const mySwiper = `${mainSl} .mySwiper`;
	const slideImage = `${mySwiper} .slide-image`;
	const sliderContent = `${mySwiper} .slide-image .slider-content`;
	// const sliderContent = `${slideImage} .slider-content`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS("", typography)?.googleFontLink}
	    ${getTypoCSS("typogra", typography)?.styles}   
		${mySwiper}{
		    border-radius: ${radiusValues.top} ${radiusValues.right} ${radiusValues.bottom} ${radiusValues.left};
			margin: ${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left};
		}
       ${slideImage} .overlay{
           background-color:${color};
	   }
       ${sliderContent} .h3{
            font-family:${fontFamily},${fontCategory};
               font-size:${fontSize[device]}px;
               font-style:${fontStyle};
               font-weight: ${fontWeight};
               text-transform: ${textTransform};
               text-decoration: ${textDecoration};
               letter-spacing: ${letterSpace};
               font-variant: ${fontVariant};
               line-height: ${lineHeight};
			   color:${headeingColor};
			   padding: ${headeingMarginValues.top} ${headeingMarginValues.right} ${headeingMarginValues.bottom} ${headeingMarginValues.left};

	   }
	    @media only screen and (min-width: 641px) and (max-width: 1024px) {
             ${sliderContent} .h3{
                font-size: ${fontSize.tablet}px;
              }
            }
           @media only screen and (max-width: 641px) {
             ${sliderContent} .h3{
               font-size: ${fontSize.mobile}px;
             }
        }


	`}} />;
}
export default Style;
// ${sliderContent} .animate-slide{
// 	animationDelay: ${animationDelay}s;
// 	animationDuration: ${animationDuration}s;
//    }