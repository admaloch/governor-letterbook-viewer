//remove prev arrow if there are no prev results and same for next etc..
const testArrows = (pageNumValue) => {
    const prevArrow = document.querySelector('.prev-thumb-icon');
    const nextArrow = document.querySelector('.next-thumb-icon');
    const lastPageIndex = pageSelect.lastElementChild.index;
    const thumbArr = genThumbArray(pageSelect.selectedIndex)

    if (thumbArr[thumbArr.length - 1] === lastPageIndex) {
        nextArrow.classList.add('d-none')
        prevArrow.classList.remove('d-none')
    } else if (thumbArr[0] === 0) {
        prevArrow.classList.add('d-none')
        nextArrow.classList.remove('d-none')
    } else {
        nextArrow.classList.remove('d-none')
        prevArrow.classList.remove('d-none')
    }
}

