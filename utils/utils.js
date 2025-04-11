import {
  comon,
  guyantv,
  dramahive,
  moviatv,
  vetrashort,
  mireotv,
  viontv,
  zyreotv
} from './mock'

export default () => {
  let obj = {
    name: '',
    data: {}
  }

  if (window.location.host.includes('guyantv')) {
    obj = {
      name: 'guyantv',
      data: deepMerge({ ...comon }, guyantv)
    }
  } else if (window.location.host.includes('dramahive')) {
    obj = {
      name: 'dramahive',
      data: deepMerge({ ...comon }, dramahive)
    }
  } else if (window.location.host.includes('dramahive')) {
    obj = {
      name: 'moviatv',
      data: deepMerge({ ...comon }, moviatv)
    }
  } else if (window.location.host.includes('dramahive')) {
    obj = {
      name: 'vetrashort',
      data: deepMerge({ ...comon }, vetrashort)
    }
  } else if (window.location.host.includes('dramahive')) {
    obj = {
      name: 'mireotv',
      data: deepMerge({ ...comon }, mireotv)
    }
  } else if (window.location.host.includes('dramahive')) {
    obj = {
      name: 'viontv',
      data: deepMerge({ ...comon }, viontv)
    }
  } else if (window.location.host.includes('dramahive')) {
    obj = {
      name: 'zyreotv',
      data: deepMerge({ ...comon }, zyreotv)
    }
  } else {
    obj = {
      name: 'comon',
      data: comon
    }
  }
  return obj
}

function deepMerge(target, source) {
  const isObject = (obj) => obj && typeof obj === 'object'

  for (const key in source) {
    if (isObject(source[key])) {
      if (!target[key]) Object.assign(target, { [key]: {} })
      deepMerge(target[key], source[key])
    } else {
      Object.assign(target, { [key]: source[key] })
    }
  }

  return target
}
