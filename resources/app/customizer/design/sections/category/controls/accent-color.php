<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

use Inc2734\WP_Customizer_Framework\Customizer_Framework;

$customizer = Customizer_Framework::init();

$terms = wp_cache_get( 'all-categories' );

foreach ( $terms as $_term ) {
	$customizer->control(
		'color',
		$_term->taxonomy . '-' . $_term->term_id . '-accent-color',
		[
			'label'    => __( 'Accent color', 'snow-monkey' ),
			'priority' => 100,
		]
	);
}

if ( ! is_customize_preview() ) {
	return;
}

$panel = $customizer->get_panel( 'design' );

foreach ( $terms as $_term ) {
	$section = $customizer->get_section( 'category-' . $_term->term_id );
	$control = $customizer->get_control( 'category-' . $_term->term_id . '-accent-color' );
	$control->join( $section )->join( $panel );
}
