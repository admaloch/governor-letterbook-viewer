// jquery for bootstrap carousel from bootstrap docs
$('.carousel').carousel({
    interval: false
})

const volumeSelect = document.querySelector('#volume-select');
const pageSelect = document.querySelector('#page-select');
const newImgLink = document.querySelector('#new-img-link');
const newImgSrc = document.querySelector('#new-img-src');
const prevArrow = document.querySelector('#prev-arrow');
const nextArrow = document.querySelector('#next-arrow');
const arrows = document.querySelectorAll('.arrows');

let volumeNumValue = 1
let pageNumValue = 1

// take full array and seperate it into multiple arrays sorted by volume
const newArray = seperateVolumes()

// loop to create items in the volume select
const addVolumeSelectOptions = () => {
    for (let i = 1; i < 38; i++) {
        const volumeSelectOption = document.createElement('option')
        volumeSelectOption.classList.add('volume-select')
        volumeSelectOption.selectedIndex = i
        volumeSelectOption.innerText = i
        volumeSelect.append(volumeSelectOption)
    }
}

// capture value of volume number when select option changes
volumeSelect.addEventListener('change', () => {
    volumeNumValue = volumeSelect.value
    let volumeIndex = parseInt(volumeSelect.value) - 1
    prevArrow.classList.add('d-none')
    addPageSelectOptions()
    pageNumValue = 1
    newImgLink.href = createImgUrl()
    newImgSrc.src = createImgUrl()
    let currVolLinks = newArray[volumeIndex].map(x => `https://www.floridamemory.com/fmp/governor-records/large/s32_${x}.jpg`)
    const downloadVolSpan = document.querySelector('#download-volume')
    downloadVolSpan.innerText = volumeNumValue
    addVolumeInfo()
})



// add items to page select based on current volume value
const addPageSelectOptions = () => {
    pageSelect.innerText = '';
    for (let i = 0; i < newArray[volumeNumValue - 1].length; i++) {
        const pageSelectOption = document.createElement('option')
        pageSelectOption.classList.add('page-select')
        pageSelectOption.value = i + 1
        const optionValueText = newArray[volumeNumValue - 1][i]
        const seperateNum = optionValueText.slice(optionValueText.lastIndexOf('_') + 1)
        const trimmedOptionValue = removeLeadingZeros(seperateNum)
        pageSelectOption.innerText = trimmedOptionValue
        pageSelect.append(pageSelectOption)
    }
}

// grab page value
pageSelect.addEventListener('change', () => {
    pageNumValue = pageSelect.value
    newImgLink.href = createImgUrl()
    newImgSrc.src = createImgUrl()
    testArrows(pageNumValue)
})

// generate img url
const createImgUrl = () => {
    const mainStr = 'https://www.floridamemory.com/fmp/governor-records/large/s32_'
    let itemStr = newArray[volumeNumValue - 1][pageNumValue - 1]
    const endStr = '.jpg'
    imgURL = `${mainStr}${itemStr}${endStr}`
    return imgURL;
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if (arrow.id == ('next-arrow')) {
            pageSelect.selectedIndex++;
        } else {
            pageSelect.selectedIndex--;
        }
        pageNumValue = pageSelect.value;
        testArrows(pageNumValue)
        newImgLink.href = createImgUrl()
        newImgSrc.src = createImgUrl()
    })

})

const addVolumeInfo = () => {
    const volTitle = document.querySelector('#vol-title');
    const volFolders = document.querySelector('#vol-folders');
    volFolders.innerHTML = null
    let currVolStr = String(volumeNumValue).padStart(2, '0')
    let currVolIndex = parseInt(currVolStr) - 1
    volTitle.innerText = allVolumes[currVolIndex].volume_title
    for (let i = 0; i < allVolumes[currVolIndex].folders.length; i++) {
        const newFolderItem = document.createElement('p')
        newFolderItem.classList.add('new-folder')
        newFolderItem.innerText = allVolumes[currVolIndex].folders[i]
        volFolders.append(newFolderItem)
    }
}



function downloadVolumes() {
    let zipLink = String(volumeNumValue).padStart(3, '0')
    const anchor = document.createElement('a')
    anchor.href = `../letterbook-viewer/media/s32_v${zipLink}.zip`;
    anchor.download = `series_32_volume-${volumeNumValue}`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
}



addVolumeSelectOptions()
addPageSelectOptions()


