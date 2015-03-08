Ext.define('SCE.interactions.Annotation', {

    extend: 'Ext.chart.interactions.Abstract',
    requires: [
        'Ext.window.MessageBox'
    ],

    type: 'annotation',
    alias: 'interaction.annotation',

    config: {
        addGesture: 'doubletap',
        editGesture: 'tap',

        events: [
            'annotationadded',
            'annotationremoved',
            'annotationupdated'
        ]  
    },

    annotations: [],  

    getGestures: function () {
        var me = this,
            gestures = {};
        gestures[me.getAddGesture()] = 'onAddGesture';
        gestures[me.getEditGesture()] = 'onEditGestureEnd';
        return gestures;
    },

    onAddGesture: function (e) {
        var me = this,
            xy = me.getChartPosition(e),
            chart = me.getChart(),
            surface = chart.getSurface('overlay');

        //show an image to indicate annotation
        var img = {
                type: 'image',
                x: xy[0] - 15,
                y: xy[1] - 30,
                draggable: true,
                src: 'resources/images/Annotation.png'
        };

        var item = surface.add(img);
        surface.renderFrame();

        //create a dialog with text area
        Ext.Msg.show({
            header:false,
            buttons: Ext.Msg.YESNOCANCEL,
            buttonText: {yes: 'Save', no: 'Remove'},
            multiline: true,
            closable: false,
            fn: function( btn , text, opt){
                if (btn == 'no') {
                    //remove the annotation sprite
                    surface.remove(item);
                    surface.renderFrame();

                    chart.fireEvent('annotationremoved', chart, e);
                } else {
                    //yes and cancel button
                    //set the annotation text and add annotation to the internal cache
                    me.annotations.push({text: text, sprite: item});

                    chart.fireEvent('annotationadded', chart, text, item, e);
                }
            }
        });
    },

    onEditGestureEnd: function(e) {
        var me = this,
            chart = me.getChart(),
            surface = chart.getSurface('overlay'),
            item = me.getMatchingAnnotationSprite(e);

        if (item) {
            //create a dialog with text area populated for edit
            Ext.Msg.show({
                header:false,
                buttons: Ext.Msg.YESNOCANCEL,
                buttonText: {yes: 'Save', no: 'Remove'},
                multiline: true,
                closable: false,
                value: item.text,
                fn: function( btn , text, opt){
                    if( btn == 'cancel' ){
                        //do nothing, for now
                    } else if (btn == 'no') {
                        //remove the annotation sprite
                        surface.remove(item.sprite);
                        surface.renderFrame();

                        chart.fireEvent('annotationremoved', chart, e);
                    } else {
                        //yes button
                        //set the annotation text and add annotation to the internal cache
                        var oldTxt = item.text;
                        item.text = text;
                        chart.fireEvent('annotationupdated', chart, item.text, oldTxt, item.sprite, e);
                    }
                }
            });            
        }
    },

    getChartPosition: function(e) {
        var me = this;

        var chart = me.getChart(),
            surface = chart.getSurface('overlay'),
            rect = Ext.Array.slice(chart.getMainRect()),
            chartWidth = rect[2],
            chartHeight = rect[3],
            xy = chart.getEventXY(e),
            x = xy[0],
            y = xy[1];

        if (x < 0) {
            x = 0;
        } else if (x > chartWidth) {
            x = chartWidth;
        }
        if (y < 0) {
            y = 0;
        } else if (y > chartHeight) {
            y = chartHeight;
        }

        return [x, y];
    },

    getMatchingAnnotationSprite: function(e) {
        var me = this;
        var tmp = null,
            items = me.annotations, 
            i, 
            l = items.length, 
            xy = me.getChartPosition(e),
            x = xy[0],
            y = xy[1];

        for (i = 0; i < l; i++) {
            tmp = items[i];

            var attr = tmp.sprite.attr;

            if ((x >= attr.x && x <= (attr.x + 30)) && 
                (y >= attr.y && y <= (attr.y + 30))) {
                return tmp;
            }
        }
    }

});
