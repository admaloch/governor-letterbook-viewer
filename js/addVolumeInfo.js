// volumeInfo snippet
const addVolumeInfo = () => {
    const volTitle = document.querySelector('#vol-title');
    const volList = document.querySelector('#vol-list');
    volList.innerHTML = null
    let currVolStr = String(volumeSelect.value).padStart(2, '0')
    let currVolIndex = parseInt(currVolStr) - 1
    volTitle.innerText = allVolumes[currVolIndex].volume_title
    for (let i = 0; i < allVolumes[currVolIndex].folders.length; i++) {
        const newFolderItem = document.createElement('li')
        newFolderItem.innerText = allVolumes[currVolIndex].folders[i]
        volList.append(newFolderItem)
    }
}