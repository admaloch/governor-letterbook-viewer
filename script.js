// jquery for bootstrap carousel from bootstrap docs
$('.carousel').carousel({
    interval: false
})

// take full array and seperate it into multiple arrays sorted by volume
const newArray = seperateVolumes()

// loop to create items in the volume select based on number of volumes in collection
addVolumeSelectOptions()

// add items to page select based on current volume value
addPageSelectOptions()

// eventlistener for volume select changes
volumeSelect.addEventListener('change', () => {
    document.querySelector('.active-img').nextElementSibling.classList.add('d-none')
    
    addPageSelectOptions()
    document.querySelector('#new-img-link').href = createImgUrl(volumeSelect.selectedIndex, pageSelect.selectedIndex)
    document.querySelector('#new-img-src').src = createImgUrl(volumeSelect.selectedIndex, pageSelect.selectedIndex)
    let currVolLinks = newArray[volumeSelect.selectedIndex].map(x => `https://www.floridamemory.com/fmp/governor-records/large/s32_${x}.jpg`)
    const downloadVolSpan = document.querySelector('#download-volume')
    downloadVolSpan.innerText = volumeSelect.value
    addVolumeInfo()
    document.querySelector('.volume-length').innerText = newArray[volumeSelect.selectedIndex].length
    addThumbImages(pageSelect.selectedIndex)
    imgSliderHandler()
    document.querySelector('.active-img').nextElementSibling.classList.add('d-none')
})

// event listener for pageSelect changes
pageSelect.addEventListener('change', () => {
    document.querySelector('#new-img-link').href = createImgUrl(volumeSelect.selectedIndex, pageSelect.selectedIndex)
    document.querySelector('#new-img-src').src = createImgUrl(volumeSelect.selectedIndex, pageSelect.selectedIndex)
    testArrows(pageSelect.value)
    addThumbImages(pageSelect.selectedIndex)
    imgSliderHandler()
    document.querySelector('.active-img').nextElementSibling.classList.add('d-none')
})

// event listner for the thumbnail arrows
document.querySelectorAll('.thumb-arrows').forEach(thumbArrow => {
    thumbArrow.addEventListener('click', () => {
        const sliderImages = document.querySelectorAll('.slider-img')
        let newPageIndex = 0
        if (thumbArrow.id == 'prev-thumb-arrow' && pageSelect.selectedIndex < 5) {
            newPageIndex = 0
        } else if (thumbArrow.id == 'prev-thumb-arrow' && pageSelect.selectedIndex >= 5) {
            newPageIndex = parseInt(sliderImages[0].id) - 5
        } else {
            newPageIndex = parseInt(sliderImages[4].id) + 1
        }
        addThumbImages(newPageIndex)
        pageSelect.selectedIndex = newPageIndex
        document.querySelector('#new-img-link').href = createImgUrl(volumeSelect.selectedIndex, newPageIndex)
        document.querySelector('#new-img-src').src = createImgUrl(volumeSelect.selectedIndex, newPageIndex)
        imgSliderHandler()
        testArrows(pageSelect.value)
        document.querySelector('.active-img').nextElementSibling.classList.add('d-none')
    })
})

// create link onclick to download the specified volume
const downloadVolumes = () => {
    let zipLink = String(volumeSelect.value).padStart(3, '0')
    const anchor = document.createElement('a')
    anchor.href = `../letterbook-viewer/media/s32_v${zipLink}.zip`;
    anchor.download = `series_32_volume-${volumeSelect.value}`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
}

addThumbImages(pageSelect.selectedIndex)
imgSliderHandler()
testArrows(pageSelect.value)
document.querySelector('.active-img').nextElementSibling.classList.add('d-none')