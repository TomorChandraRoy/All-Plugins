
import { getTypoCSS } from '../../../../bpl-tools/utils/getCSS';
const Style = ({ attributes, id, device = "desktop" }) => {

	const { sliderHeightRespon, descriptionRespon, typography, decTypography,  color,marginValues,radiusValues } = attributes;

	// const { fontFamily, fontCategory, fontSize, fontWeight, textDecoration, textTransform, fontStyle, letterSpace, lineHeight } = typography;

	// // DecTypography attributes
	// const {
	// 	fontFamily: decFontFamily,
	// 	fontCategory: decfontCategory,
	// 	fontWeight: decFontWeight,
	// 	fontSize: decFontSize,
	// 	fontStyle: decFontStyle,
	// 	textTransform: decTextTransform,
	// 	textDecoration: decTextDecoration,
	// 	lineHeight: decLineHeight,
	// 	letterSpace: decLetterSpace
	// } = decTypography;

	// //buttonTypography

	// const {
	// 	fontFamily: buttonFontFamily,
	// 	fontCategory: buttonfontCategory,
	// 	fontWeight: buttonFontWeight,
	// 	fontSize: buttonFontSize,
	// 	fontStyle: buttonFontStyle,
	// 	textTransform: buttonTextTransform,
	// 	textDecoration: buttonTextDecoration,
	// 	lineHeight: buttonLineHeight,
	// 	letterSpace: buttonLetterSpace
	// } = buttonTypography;


	const mainSl = `#${id}`;

	// const blockSl = `${mainSl} .bBlocksModernSlides`;
	const mySwiper = `${mainSl} .mySwiper`;
	// const buttonContent = `${mySwiper} .swiper-main-content `;
	const ContentAlignment = `${mySwiper} .swiper-main-content `;
	const mainContent = `${mySwiper} .swiper-main-content `;



	return <style dangerouslySetInnerHTML={{
		__html: `
	
		${getTypoCSS("", typography)?.googleFontLink}
	    ${getTypoCSS("typogra", typography)?.styles}   
		${getTypoCSS("", decTypography)?.googleFontLink}
	    ${getTypoCSS("typogra", decTypography)?.styles}  


       ${mainContent}.overlay{
           background-color:${color};
	   }
		${mySwiper}{
			height:${sliderHeightRespon[device]};
			border-radius: ${radiusValues.top} ${radiusValues.right} ${radiusValues.bottom} ${radiusValues.left};
			margin: ${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left};

		}
       @media only screen and (min-width:641px) and (max-width: 1024px){
            ${mySwiper} {
			height:${sliderHeightRespon.tablet};
                
            }
       }
       @media only screen and (max-width: 641px){
            ${mySwiper} {
			height:${sliderHeightRespon.mobile};
              
            }
       }
		
	    ${mySwiper} .swiper-main-content .slide-content {
            width: calc(100% - ${descriptionRespon[device]});
			
        }
          
        @media only screen and (min-width: 641px) and (max-width: 1024px) {
            ${mySwiper} .swiper-main-content .slide-content  {
              width: calc(100% - ${descriptionRespon.tablet});
            }
        }

        @media only screen and (max-width: 641px) {
            ${mySwiper} .swiper-main-content .slide-content  {
              width: calc(100% - ${descriptionRespon.mobile});
            }
        }

		${ContentAlignment} .align-top-left{
			text-align: left;
			margin-bottom: 190px;
		}
		${ContentAlignment} .align-top-center{
			text-align: center;
			margin-bottom: 190px;
		}
		${ContentAlignment} .align-top-right{
			text-align: right;
			margin-bottom: 190px;
		}
		${ContentAlignment} .align-center-left{
			text-align: left;
		}
		${ContentAlignment} .align-center-center{
			text-align: center;
		}
		${ContentAlignment} .align-center-right{
            text-align: right;
		}
		${ContentAlignment} .align-bottom-left{
            margin-top: 105px;
            text-align: left;
		}
		${ContentAlignment} .align-bottom-center{
            margin-top: 105px;
            text-align: center;
		}
		${ContentAlignment} .align-bottom-right{
            margin-top: 105px;
            text-align: right;
		}



	`}} />;
}
export default Style;
// ${blockSl} p{
// 	${getColorsCSS(colors)}
// }


// ${buttonContent} .button {

// 	font-family:${buttonFontFamily},${buttonfontCategory};
// 	font-size:${buttonFontSize[device]}px;
// 	font-style:${buttonFontStyle};
// 	font-weight: ${buttonFontWeight};
// 	text-transform: ${buttonTextTransform};
// 	text-decoration: ${buttonTextDecoration};
// 	letter-spacing: ${buttonLetterSpace};
// 	line-height: ${buttonLineHeight};
// 	color: ${colors?.color};
// 	background: ${colors?.bgType === "gradient" ? colors?.gradient : colors?.bg};
// 	padding: ${buttonPaddingValues?.top} ${buttonPaddingValues?.right} ${buttonPaddingValues?.bottom} ${buttonPaddingValues?.left};
// 	border:${buttonBorder?.width} ${buttonBorder?.style} ${buttonBorder?.color};
// 	border-radius:${buttonRadiusValues?.top} ${buttonRadiusValues?.right} ${buttonRadiusValues?.bottom} ${buttonRadiusValues?.left};
// }