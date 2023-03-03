const testArrows = (pageNumValue) => {
    let lastValue = parseInt($('#page-select option:last-child').val())

    if (pageNumValue == lastValue) {
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
