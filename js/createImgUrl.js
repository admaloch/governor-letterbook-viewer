// generate img url
const createImgUrl = (volumeIndex, pageIndex) => {
    const mainStr = 'https://www.floridamemory.com/fmp/governor-records/large/s32_'
    let itemStr = newArray[volumeIndex][pageIndex]
    const endStr = '.jpg'
    imgURL = `${mainStr}${itemStr}${endStr}`
    return imgURL;
}