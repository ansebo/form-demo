const imageExtentions = ['jpeg', 'jpg', 'JPG', 'JPEG', 'png', 'PNG', 'webm'];

export function isFileImage(fileName: string) {
  const nameAsArray = fileName.split('.');
  const extention = nameAsArray[nameAsArray.length - 1];
  if (extention && imageExtentions.includes(extention)) {
    return true
  }
  return false;
}