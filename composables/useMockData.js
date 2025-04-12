import mockData from '~/server/data/mock.json'


export const useMock = async () => {
  return mockData
}

const deepMerge = (target, source) => {
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

export const dataFetch = (allData, key) => {
  let obj = {
    name: '',
    data: {}
  }
  console.log(allData, key)
  if (allData[key]) {
    obj = {
      name: key,
      data: deepMerge({ ...allData.comon }, allData[key])
    }
  } else {
    obj = {
      name: 'comon',
      data: allData.comon
    }
  }
  return obj
}
