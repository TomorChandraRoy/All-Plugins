// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';
import { getTypoCSS } from '../../../../bpl-tools/utils/getCSS';
const Style = ({ attributes, id }) => {

	const { color, marginValues, radiusValues, typography, headeingColor, headeingPaddingValues, decMarginValues, decColor, decTypography,colors,buttonHoverColor,buttonTypography,buttonPaddingValues,buttonBorder,buttonRadiusValues, device = "desktop" } = attributes;

	const { fontFamily, fontCategory, fontSize, fontWeight, textDecoration, textTransform, fontStyle, letterSpace, lineHeight } = typography;

	// DecTypography attributes
	const {
		fontFamily: decFontFamily,
		fontCategory: decfontCategory,
		fontWeight: decFontWeight,
		fontSize: decFontSize,
		fontStyle: decFontStyle,
		textTransform: decTextTransform,
		textDecoration: decTextDecoration,
		lineHeight: decLineHeight,
		letterSpace: decLetterSpace
	} = decTypography;

//buttonTypography

const {
	fontFamily: buttonFontFamily,
	fontCategory: buttonfontCategory,
	fontWeight: buttonFontWeight,
	fontSize: buttonFontSize,
	fontStyle: buttonFontStyle,
	textTransform: buttonTextTransform,
	textDecoration: buttonTextDecoration,
	lineHeight: buttonLineHeight,
	letterSpace: buttonLetterSpace
} = buttonTypography;

	const mainSl = `#${id}`;
	// const swiper = `${mainSl} .swiper`;
	const mySwiper = `${mainSl} .mySwiper`;
	const slideImage = `${mySwiper} .slide-image`;
	const sliderContent = `${mySwiper} .slide-image .slider-content`;
	const buttonSection = `${mySwiper} .slide-image `;


	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS("", typography)?.googleFontLink}
	    ${getTypoCSS("typogra", typography)?.styles}   
		${getTypoCSS("", decTypography)?.googleFontLink}
	    ${getTypoCSS("typogra", decTypography)?.styles}   
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
               line-height: ${lineHeight};
			   color:${headeingColor};
			   padding: ${headeingPaddingValues?.top} ${headeingPaddingValues?.right} ${headeingPaddingValues?.bottom} ${headeingPaddingValues?.left};
	   }

      ${sliderContent} .dec{
	           font-family:${decFontFamily},${decfontCategory};        
               font-size:${decFontSize[device]}px;
               font-style:${decFontStyle};
               font-weight: ${decFontWeight};
               text-transform: ${decTextTransform};
               text-decoration: ${decTextDecoration};
               letter-spacing: ${decLetterSpace};
               line-height: ${decLineHeight};
			   color:${decColor};
			   margin: ${decMarginValues?.top} ${decMarginValues?.right} ${decMarginValues?.bottom} ${decMarginValues?.left};
	  }
	   @media only screen and (min-width: 641px) and (max-width: 1024px) {
             ${sliderContent} .h3{
                font-size: ${fontSize.tablet}px;
            }
             ${sliderContent} .dec{
                font-size: ${decFontSize.tablet}px;
            }
        }
        @media only screen and (max-width: 641px) {
             ${sliderContent} .h3{
               font-size: ${fontSize.mobile}px;
            }
             ${sliderContent} .dec{
               font-size: ${decFontSize.mobile}px;
            }
        }
		${buttonSection} .button{
			font-family:${buttonFontFamily},${buttonfontCategory};        
            font-size:${buttonFontSize[device]}px;
            font-style:${buttonFontStyle};
            font-weight: ${buttonFontWeight};
            text-transform: ${buttonTextTransform};
            text-decoration: ${buttonTextDecoration};
            letter-spacing: ${buttonLetterSpace};
            line-height: ${buttonLineHeight};
            color: ${colors?.color}; 
            background: ${colors?.bgType === "gradient" ? colors?.gradient : colors?.bg};
			padding: ${buttonPaddingValues?.top} ${buttonPaddingValues?.right} ${buttonPaddingValues?.bottom} ${buttonPaddingValues?.left};
			border:${buttonBorder?.width} ${buttonBorder?.style} ${buttonBorder?.color};
			border-radius:${buttonRadiusValues?.top} ${buttonRadiusValues?.right} ${buttonRadiusValues?.bottom} ${buttonRadiusValues?.left};
		}
		@media only screen and (min-width: 641px) and (max-width: 1024px) {
             ${buttonSection} .button{
                font-size: ${buttonFontSize.tablet}px;
            }
        }
		@media only screen and (max-width: 641px) {
             ${buttonSection} .button{
                font-size: ${buttonFontSize.mobile}px;
            }
        }
		${buttonSection} .button:hover {
			color: ${buttonHoverColor?.color};
			background: ${buttonHoverColor?.bgType === "gradient" ? buttonHoverColor?.gradient : buttonHoverColor?.bg}; 	 
		}
	`}} />;
}
export default Style;
