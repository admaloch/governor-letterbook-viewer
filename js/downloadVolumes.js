
// create link onclick to download the specified volume
function downloadVolumes() {
    let zipLink = String(volumeNumValue).padStart(3, '0')
    const anchor = document.createElement('a')
    anchor.href = `../letterbook-viewer/media/s32_v${zipLink}.zip`;
    anchor.download = `series_32_volume-${volumeNumValue}`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

}