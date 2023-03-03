
// seperates based on volume
const seperateVolumes = () => {
    let fullArray = []
    for (let i = 1; i <= 37; i++) {
        let filteredArr = linkArr.filter(x =>
            x.includes(`v00${i}_`) || x.includes(`v0${i}_`))
        fullArray.push(filteredArr)
    }
    return fullArray
}
