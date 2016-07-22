Ext.define('TestApp.controller.phone.WriteLog', {
    extend: 'TestApp.controller.Base',
    requires: [
    ],
    config: {
        refs:{
            writeLogView:{
                selector:'writeLogView',
                xtype:'writeLogView'
            }
        },
        routes:{
            'writeLog':'goWriteLogView'
        },
        control:{
            writeLogView:{
                initialize:function(view,eOpts) {

                    view.down('button').addListener({
                        tap:{
                            fn:function(button, e, eOpts){
                                console.log(view.getValues());
                            }
                        }
                    })
                }
            }
        }
    },
    goWriteLogView:function(){
        this.changeView(Ext.create('TestApp.view.phone.WriteLog'));
    }
});