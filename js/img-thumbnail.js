// add thumb images to page with generated array
const addThumbImages = (index) => {
    const thumbContainer = document.querySelector('.thumb-img-container')
    thumbContainer.innerHTML = ''
    const thumbArr = genThumbArray(index)

    for (let i = 0; i < thumbArr.length; i++) {
        let newImgSrc = createImgUrl(volumeSelect.selectedIndex, thumbArr[i])
        const imgContainer = document.createElement('div')
        imgContainer.innerHTML = `
            <img src="${newImgSrc}" alt="thumb-img" class="img-fluid slider-img img-thumbnail" id="${thumbArr[i]}">
            <div id="${thumbArr[i]}" class="thumb-text "></div>
        `
        thumbContainer.append(imgContainer)
    }
    document.querySelectorAll('.slider-img')[0].classList.add('active-img')
}

// create array of inputted index + next 4
const genThumbArray = (pageIndex) => {
    let thumbArr = []
    for (let i = 0; i < 5; i++) {
        thumbArr.push(pageIndex)
        pageIndex++
    }
    const lastPageIndex = pageSelect.lastElementChild.index;
    thumbArr = thumbArr.filter(arr => arr <= lastPageIndex)
    thumbArr = thumbArr.filter(arr => arr >= 0)
    return thumbArr
}

// handler for images -- change active class and page select index to reflect change
const imgSliderHandler = () => {
    const sliderImages = document.querySelectorAll('.slider-img')
    sliderImages.forEach(img => {
        img.addEventListener('click', () => {
            document.querySelector('.active-img').nextElementSibling.classList.remove('d-none')
            sliderImages.forEach(images => {
                images.classList.remove('active-img')
            })
            document.querySelector('#new-img-link').href = img.src
            document.querySelector('#new-img-src').src = img.src
            img.classList.add('active-img')
            document.querySelector('.active-img').nextElementSibling.classList.add('d-none')
            pageSelect.selectedIndex = parseInt(img.id)
        })
    })
    document.querySelectorAll('.thumb-text').forEach(thumbText => {
        thumbText.innerText = `Pg ${pageSelect[thumbText.id].innerText}`
    })
}

