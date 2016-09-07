Ext.define('TestApp.view.phone.Index', {
    extend: 'Ext.form.Panel',
    xtype: 'indexPhoneView',
    requires: [],
    config: {
        padding: '10 10',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Index'
        }, {
            xtype: 'button',
            itemId: 'goHomeBtn',
            ui: 'forward',
            text: 'Go Home View'
        }, {
            margin: '10 0',
            xtype: 'button',
            itemId: 'goWriteLogBtn',
            ui: 'forward',
            text: 'Go WriteLog View'
        }]
    }
});