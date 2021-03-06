import define from '../define';

const fn = {
  data: define.data( {
    field: 'data',
    bindingEvent: 'data',
    allowBinding: true,
    allowSetting: true,
    settingEvent: 'data',
    settingTriggersEvent: true,
    triggerFnName: 'trigger',
    allowGetting: true
  } ),

  removeData: define.removeData( {
    field: 'data',
    event: 'data',
    triggerFnName: 'trigger',
    triggerEvent: true
  } ),

  scratch: define.data( {
    field: 'scratch',
    bindingEvent: 'scratch',
    allowBinding: true,
    allowSetting: true,
    settingEvent: 'scratch',
    settingTriggersEvent: true,
    triggerFnName: 'trigger',
    allowGetting: true
  } ),

  removeScratch: define.removeData( {
    field: 'scratch',
    event: 'scratch',
    triggerFnName: 'trigger',
    triggerEvent: true
  } )
};

// aliases
fn.attr = fn.data;
fn.removeAttr = fn.removeData;

export default fn;