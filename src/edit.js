/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 *
 * @return {Element} Element to render.
 */
export default function Edit( {
	attributes: { continuous, autoplay },
	setAttributes,
} ) {
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{ className: 'slider-container' },
		{ allowedBlocks: [ 'core/cover', 'core/image', 'core/media-text' ] }
	);
	return (
		<div { ...blockProps }>
			<div { ...innerBlockProps }></div>
			<div class="buttons">
				<button aria-label="go to previous slide">&lt;</button>
				<p data-wp-text="state.imageIndex">1/10</p>
				<button aria-label="go to next slide">&gt;</button>
			</div>
			<InspectorControls>
				<PanelBody title={ __( 'Slider Controls' ) }>
					<ToggleControl
						label={ __( 'Continuous' ) }
						help={ __(
							'If enabled, the slider will loop back to the first slide after the last slide.'
						) }
						checked={ continuous }
						onChange={ () =>
							setAttributes( { continuous: ! continuous } )
						}
					/>
					<ToggleControl
						label={ __( 'Autoplay' ) }
						help={ __(
							'Set the slideshow to play automatically.'
						) }
						checked={ autoplay }
						onChange={ () =>
							setAttributes( { autoplay: ! autoplay } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
