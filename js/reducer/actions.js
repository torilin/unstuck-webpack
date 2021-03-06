import {TemplateConfigurator, FrameworkConfigurator} from 'configurator/index'

export default class Actions {

  static SET_TEMPLATE(template = null) {
    return dispatch => TemplateConfigurator(dispatch, template)
  }

  static ADD_FW(fw = null) {
    return dispatch => FrameworkConfigurator(dispatch, fw)
  }


  static RESET() {
    return {
      type : 'RESET',
      payload : null
    }
  }

  static TOGGLE_VENDOR(vendor = null, checked = false) {
    return {
      type : 'TOGGLE_VENDOR',
      payload : {vendor, checked}
    }
  }

  static TOGGLE_HTML(checked = false) {
    return {
      type : 'TOGGLE_HTML',
      payload : {checked}
    }
  }

  static TOGGLE_HTML_TEMPLATE(template = null, checked = false) {
    return {
      type : 'TOGGLE_HTML_TEMPLATE',
      payload : {template, checked}
    }
  }

  static SET_HTML_TEMPLATE_TARGET(template = null, target = '/') {
    return {
      type : 'SET_HTML_TEMPLATE_TARGET',
      payload : {template, target}
    }
  }

  static FW_ADD_FRAMEWORK(fw = null) {
    return {
      type : 'FW_ADD_FRAMEWORK',
      payload : {fw}
    }
  }

  static FW_REMOVE_FRAMEWORK(fw = null) {
    return {
      type : 'FW_REMOVE_FRAMEWORK',
      payload : {fw}
    }
  }

  static TOGGLE_JS(checked = false) {
    return {
      type : 'TOGGLE_JS',
      payload : {checked}
    }
  }

  static TOGGLE_CSS(checked = false) {
    return {
      type : 'TOGGLE_CSS',
      payload : {checked}
    }
  }

  static TAB_DEFAULT(page, tab) {
    return {
      type : 'TAB_DEFAULT',
      payload : {page , tab}
    }
  }

  static CONFIG_TEMPLATE(template) {
    return {
      type : 'CONFIG_TEMPLATE',
      payload : {template}
    }
  }

  static CONFIG_GENERAL_TARGET(plugin = null, option, target) {
    return {
      type : 'CONFIG_GENERAL_TARGET',
      payload : {plugin, option, target}
    }
  }

  static CONFIG_TOGGLE_PLUGIN(plugin, checked = false) {
    return {
      type : 'CONFIG_TOGGLE_PLUGIN',
      payload : {plugin, checked}
    }
  }

  static JS_TOGGLE_LINTER(checked = false) {
    return {
      type : 'JS_TOGGLE_LINTER',
      payload : {checked}
    }
  }

  static JS_SELECT_TRANSPILLER(transpiller = 'none', checked = false) {
    return {
      type : 'JS_SELECT_TRANSPILLER',
      payload : {transpiller, checked}
    }
  }

  static JS_SELECT_SOURCEMAP(sourcemap = 'none') {
    return {
      type : 'JS_SELECT_SOURCEMAP',
      payload : {sourcemap}
    }
  }

  static CSS_SELECT_TRANSPILLER(transpiller = 'none', checked = false) {
    return {
      type : 'CSS_SELECT_TRANSPILLER',
      payload : {transpiller, checked}
    }
  }

  static CSS_TOGGLE_AUTOPREFIX(checked = false) {
    return {
      type : 'CSS_TOGGLE_AUTOPREFIX',
      payload : {checked}
    }
  }

}
