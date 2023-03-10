// loop to create items in the volume select
 const addVolumeSelectOptions = () => {
    for (let i = 1; i < numberOfVolumes; i++) {
        const volumeSelectOption = document.createElement('option')
        volumeSelectOption.selectedIndex = i
        volumeSelectOption.innerText = i
        document.querySelector('#volume-select').append(volumeSelectOption)
    }
}

// add items to page select based on current volume value
const addPageSelectOptions = () => {
    pageSelect.innerText = '';
    for (let i = 0; i < newArray[volumeSelect.selectedIndex].length; i++) {
        const pageSelectOption = document.createElement('option')
        pageSelectOption.value = i + 1
        const optionValueText = newArray[volumeSelect.selectedIndex][i]
        const seperateNum = optionValueText.slice(optionValueText.lastIndexOf('_') + 1)
        const trimmedOptionValue = removeLeadingZeros(seperateNum)
        pageSelectOption.innerText = trimmedOptionValue
        document.querySelector('#page-select').append(pageSelectOption)
    }
}