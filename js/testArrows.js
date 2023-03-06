// remove prev arrow on page 1 and next arrow on final page of volume
const testArrows = (pageNumValue) => {
    const finalSelectValue = parseInt($('#page-select option:last-child').val())
    const prevArrow = document.querySelector('#prev-arrow');
    const nextArrow = document.querySelector('#next-arrow');
    if (pageNumValue == finalSelectValue) {
        nextArrow.classList.add('d-none')
        prevArrow.classList.remove('d-none')
    } else if (pageSelect.value == '1') {
        prevArrow.classList.add('d-none')
        nextArrow.classList.remove('d-none')
    } else {
        nextArrow.classList.remove('d-none')
        prevArrow.classList.remove('d-none')
    }
}
