export function setAttribute(element, {attrName, attrVal}) {
  if (attrVal!==undefined && attrVal!==null) {
    element.setAttribute(attrName, attrVal)
  } else {
    element.removeAttribute(attrName);
  }
}

export function getMaterialClass(componentName, attribute) {
  return `mdc-${componentName}--${attribute}`;
}