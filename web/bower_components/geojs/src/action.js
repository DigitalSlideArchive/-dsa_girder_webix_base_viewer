//////////////////////////////////////////////////////////////////////////////
/**
 * Common object containing all action types that are provided by the GeoJS
 * API.
 */
//////////////////////////////////////////////////////////////////////////////
var geo_action = {
  momentum: 'geo_action_momentum',
  pan: 'geo_action_pan',
  rotate: 'geo_action_rotate',
  select: 'geo_action_select',
  unzoomselect: 'geo_action_unzoomselect',
  zoom: 'geo_action_zoom',
  zoomselect: 'geo_action_zoomselect',

  // annotation actions
  annotation_polygon: 'geo_annotation_polygon',
  annotation_rectangle: 'geo_annotation_rectangle'
};

module.exports = geo_action;
