/* ui/main.js

Description:
    This module renders the UI. It combines the different UI components
    returned from the submodules and renders one UI.

Dependencies:
    - header: header component
    - filters: filters components used to control the brightness/contrast, etc. of the slide
    - slidenav: the left panel that contains the thumbnails, dropdown and search
    - toolbar: contains additional buttons setting on top the slide

Return:
    - viewer - Openseadragon viewer object
 */

define("tcga/main", ["tcga/slidenav", "common/toolbar", "common/header", "common/footer", "webix"], function(slidenav, toolbar, header, footer) {

    function init() {
        //This is the Openseadragon layer
        viewerPanel = {
            id: "viewer_root",
            borderless: true,
            rows: [toolbar, {
                view: "template",
                id: "viewer_panel",
                content: "geo_osd"
            }]
        };
        
        //Render the main layout
        //It contains the header, slidenav, Openseadragon layer
        webix.ui({
            container: "main_layout",
            id: "root",
            rows: [
                header, {
                    cols: [
                        slidenav, {
                            view: "resizer"
                        },
                        {
                            rows:[
                                viewerPanel,
                                footer
                            ]
                        }
                    ]
                }
            ]
        });
    }

    return {
        init: init
    }
});