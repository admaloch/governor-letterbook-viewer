// generate img url
const createImgUrl = () => {
    const mainStr = 'https://www.floridamemory.com/fmp/governor-records/large/s32_'
    let itemStr = newArray[volumeNumValue - 1][pageNumValue - 1]
    const endStr = '.jpg'
    imgURL = `${mainStr}${itemStr}${endStr}`
    return imgURL;
}