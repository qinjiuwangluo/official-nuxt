export const decryptCxEd=(encryptedData: any)=> {
  const EN_STR_TAG = '$'

  // 检查数据是否以预定标记开始
  if (!encryptedData.startsWith(EN_STR_TAG)) {
    throw new Error('Invalid encoded string.')
  }

  // 移除标记
  encryptedData = encryptedData.slice(EN_STR_TAG.length)

  // 将16进制转换为字节数组
  const decodedData = hexToBytes(encryptedData)
  const saltLen = decodedData[0]
  const salt = decodedData.slice(1, 1 + saltLen)
  const encryptedBytes = decodedData.slice(1 + saltLen)

  // 解密
  const decrypted = decryptWithSalt(encryptedBytes, salt)

  // 使用TextDecoder将字节数组转换为UTF-8字符串
  const decoder = new TextDecoder('utf-8')
  return decoder.decode(new Uint8Array(decrypted))
}

// 使用盐解密数据
function decryptWithSalt(data: any, salt: any) {
  const decrypted = []
  const saltLen = salt.length

  for (let i = 0; i < data.length; i++) {
    const saltByte = salt[i % saltLen]
    decrypted.push(calRemoveSalt(data[i], saltByte))
  }

  return decrypted
}

// 计算去盐值
function calRemoveSalt(v: any, s: any) {
  if (v >= s) {
    return v - s
  }
  return 255 - (s - v) + 1
}

// 16进制转换为字节数组
function hexToBytes(hex: any) {
  let bytes = []
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.substr(i, 2), 16))
  }
  return bytes
}
