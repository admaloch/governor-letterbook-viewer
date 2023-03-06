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

// capture value of volume number when select option changes
volumeSelect.addEventListener('change', () => {
    volumeNumValue = volumeSelect.value
    let volumeIndex = parseInt(volumeNumValue) - 1
    document.querySelector('#prev-arrow').classList.add('d-none')
    addPageSelectOptions()
    pageNumValue = 1
    document.querySelector('#new-img-link').href = createImgUrl()
    document.querySelector('#new-img-src').src = createImgUrl()
    let currVolLinks = newArray[volumeIndex].map(x => `https://www.floridamemory.com/fmp/governor-records/large/s32_${x}.jpg`)
    const downloadVolSpan = document.querySelector('#download-volume')
    downloadVolSpan.innerText = volumeNumValue
    addVolumeInfo()
    document.querySelector('.volume-length').innerText = newArray[volumeIndex].length

})

// grab page value
pageSelect.addEventListener('change', () => {
    pageNumValue = pageSelect.value
    document.querySelector('#new-img-link').href = createImgUrl()
    document.querySelector('#new-img-src').src = createImgUrl()
    testArrows(pageNumValue)
})

// event listener for next/prev arrows to change item
document.querySelectorAll('.arrows').forEach(arrow => {
    arrow.addEventListener('click', () => {
        
        arrow.id == ('next-arrow') ? pageSelect.selectedIndex++ : pageSelect.selectedIndex--
        pageNumValue = pageSelect.value;
        testArrows(pageNumValue)
        document.querySelector('#new-img-link').href = createImgUrl()
        document.querySelector('#new-img-src').src = createImgUrl()
    })
})


