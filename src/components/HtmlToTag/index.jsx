/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { createElement } from "react";

/**
 * HtmlToTag component renders HTML content inside a specified HTML tag.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.htmlContent - HTML content to be rendered inside the tag
 * @param {string} [props.tag="span"] - HTML tag to use as the container element
 * @param {string} [props.className=""] - CSS class name to apply to the container
 * @param {Object} [props.style={}] - Inline styles to apply to the container
 * @param {Object} props.props - Any additional props will be passed to the container element
 *
 * @returns {React.Element} A React element with the specified tag containing the HTML content
 *
 * @example
 * // Render HTML content in a div
 * <HtmlToTag
 *   htmlContent="<strong>Bold text</strong> and <em>italic text</em>"
 *   tag="div"
 *   className="custom-container"
 * />
 *
 * @example
 * // Render HTML content in a paragraph with custom styles
 * <HtmlToTag
 *   htmlContent="This is <mark>highlighted</mark> text"
 *   tag="p"
 *   style={{ color: 'blue', fontSize: '16px' }}
 * />
 *
 * @note This component uses dangerouslySetInnerHTML internally.
 * Be sure the HTML content is sanitized to prevent XSS attacks.
 */
function HtmlToTag({ htmlContent, tag = "span", className = "", style = {}, ...props }) {
	return createElement(tag, {
		className,
		style,
		dangerouslySetInnerHTML: { __html: htmlContent },
		...props,
	});
}

HtmlToTag.displayName = "HtmlToTag";

export default HtmlToTag;
