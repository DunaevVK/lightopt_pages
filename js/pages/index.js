const initCatalogScripts = () => {
    const customSelect = document.querySelectorAll('.custom-select')

    customSelect.forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('custom-select--open')

            if (e.target.classList.contains('custom-select__option')) {

            }

            if (e.target.classList.contains('custom-select__option')) {
                e.currentTarget.querySelector('.custom-select__value').textContent = e.target.textContent;
            }
        })
    })
}

window.addEventListener('load', initCatalogScripts)
const initCatalogFiltersScripts = () => {
    const customCheckbox = document.querySelectorAll('.custom-checkbox')
    const catalogFilterTop = document.querySelectorAll('.catalog-filter__top')
    const catalogFilter = document.querySelectorAll('.catalog-filter')

    document.querySelector('.catalog-filters__btn')
        .addEventListener('click', () => {
            catalogFilter.forEach(el => {
                el.closest('.catalog-filter')
                    .classList.toggle('catalog-filter--show')
            })
        })

    catalogFilterTop.forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.catalog-filter')
                .classList.toggle('catalog-filter--open')

            el.querySelector('.catalog-filter__title')
                .classList.toggle('catalog-filter__title--active')
        })
    })

    customCheckbox.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            el.classList.toggle('custom-checkbox--active')
        })
    })

    let rangeMin = 100 // Расстояние между ползунками

    const ranges = document.querySelectorAll(".range") // Все ползунки на странице

    ranges.forEach(el => {
        const rangeSelected = el.querySelector(".range-selected")
        const minRangeInput = el.querySelector(".min")
        const maxRangeInput = el.querySelector(".max")
        const minPriceInput = el.querySelector(".price-min")
        const maxPriceInput = el.querySelector(".price-max")

        minPriceInput.addEventListener('change', (e) => {
            if (!e.currentTarget.value || e.currentTarget.value < 1) {
                e.currentTarget.value = 1
            }
        })

        maxPriceInput.addEventListener('change', (e) => {
            if (!e.currentTarget.value || e.currentTarget.value > 1000) {
                e.currentTarget.value = 1000
            }
        });

        // Обработчик для ползунков диапазона
        [minRangeInput, maxRangeInput].forEach((input) => {
            input.addEventListener("input", (e) => {
                let minRange = parseInt(minRangeInput.value)
                let maxRange = parseInt(maxRangeInput.value)

                if (maxRange - minRange < rangeMin) {
                    if (e.target.className === "min") {
                        minRangeInput.value = maxRange - rangeMin
                    } else {
                        maxRangeInput.value = minRange + rangeMin
                    }
                } else {
                    minPriceInput.value = minRange
                    maxPriceInput.value = maxRange
                    rangeSelected.style.left = (minRange / minRangeInput.max) * 100 + "%"
                    rangeSelected.style.right = 100 - (maxRange / maxRangeInput.max) * 100 + "%"
                }
            })
        });

        // Обработчик для ввода цен
        [minPriceInput, maxPriceInput].forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = parseInt(minPriceInput.value)
                let maxPrice = parseInt(maxPriceInput.value)

                if (maxPrice - minPrice >= rangeMin && maxPrice <= maxRangeInput.max) {
                    if (e.target.className === "price-min") {
                        minRangeInput.value = minPrice
                        rangeSelected.style.left = (minPrice / minRangeInput.max) * 100 + "%"
                    } else {
                        maxRangeInput.value = maxPrice
                        rangeSelected.style.right = 100 - (maxPrice / maxRangeInput.max) * 100 + "%"
                    }
                }
            })
        })
    })
}

window.addEventListener('load', initCatalogFiltersScripts)



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2NvbXBvbmVudHMvY2F0YWxvZy9jYXRhbG9nLmpzIiwiaW5kZXgvc2NyaXB0LmpzIiwiaW5kZXgvY29tcG9uZW50cy9jYXRhbG9nLWZpbHRlcnMvY2F0YWxvZy1maWx0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdENhdGFsb2dTY3JpcHRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VzdG9tU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKVxyXG5cclxuICAgIGN1c3RvbVNlbGVjdC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcclxuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2N1c3RvbS1zZWxlY3RfX29wdGlvbicpKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXN0b20tc2VsZWN0X19vcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X192YWx1ZScpLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0Q2F0YWxvZ1NjcmlwdHMpIiwiLy89cmVxdWlyZSBjb21wb25lbnRzL2NhdGFsb2cvY2F0YWxvZy5qc1xyXG4vLz1yZXF1aXJlIGNvbXBvbmVudHMvY2F0YWxvZy1maWx0ZXJzL2NhdGFsb2ctZmlsdGVycy5qcyIsImNvbnN0IGluaXRDYXRhbG9nRmlsdGVyc1NjcmlwdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXN0b21DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tY2hlY2tib3gnKVxyXG4gICAgY29uc3QgY2F0YWxvZ0ZpbHRlclRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLWZpbHRlcl9fdG9wJylcclxuICAgIGNvbnN0IGNhdGFsb2dGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1maWx0ZXInKVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nLWZpbHRlcnNfX2J0bicpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYXRhbG9nRmlsdGVyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xvc2VzdCgnLmNhdGFsb2ctZmlsdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZSgnY2F0YWxvZy1maWx0ZXItLXNob3cnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgY2F0YWxvZ0ZpbHRlclRvcC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuY2xvc2VzdCgnLmNhdGFsb2ctZmlsdGVyJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKCdjYXRhbG9nLWZpbHRlci0tb3BlbicpXHJcblxyXG4gICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZy1maWx0ZXJfX3RpdGxlJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKCdjYXRhbG9nLWZpbHRlcl9fdGl0bGUtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY3VzdG9tQ2hlY2tib3guZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnY3VzdG9tLWNoZWNrYm94LS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCByYW5nZU1pbiA9IDEwMCAvLyDQoNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINC/0L7Qu9C30YPQvdC60LDQvNC4XHJcblxyXG4gICAgY29uc3QgcmFuZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYW5nZVwiKSAvLyDQktGB0LUg0L/QvtC70LfRg9C90LrQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LVcclxuXHJcbiAgICByYW5nZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2VTZWxlY3RlZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIucmFuZ2Utc2VsZWN0ZWRcIilcclxuICAgICAgICBjb25zdCBtaW5SYW5nZUlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIi5taW5cIilcclxuICAgICAgICBjb25zdCBtYXhSYW5nZUlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIi5tYXhcIilcclxuICAgICAgICBjb25zdCBtaW5QcmljZUlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIi5wcmljZS1taW5cIilcclxuICAgICAgICBjb25zdCBtYXhQcmljZUlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIi5wcmljZS1tYXhcIilcclxuXHJcbiAgICAgICAgbWluUHJpY2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC52YWx1ZSB8fCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtYXhQcmljZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZS5jdXJyZW50VGFyZ2V0LnZhbHVlIHx8IGUuY3VycmVudFRhcmdldC52YWx1ZSA+IDEwMDApIHtcclxuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9IDEwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQtNC70Y8g0L/QvtC70LfRg9C90LrQvtCyINC00LjQsNC/0LDQt9C+0L3QsFxyXG4gICAgICAgIFttaW5SYW5nZUlucHV0LCBtYXhSYW5nZUlucHV0XS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtaW5SYW5nZSA9IHBhcnNlSW50KG1pblJhbmdlSW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBsZXQgbWF4UmFuZ2UgPSBwYXJzZUludChtYXhSYW5nZUlucHV0LnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtYXhSYW5nZSAtIG1pblJhbmdlIDwgcmFuZ2VNaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcIm1pblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblJhbmdlSW5wdXQudmFsdWUgPSBtYXhSYW5nZSAtIHJhbmdlTWluXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmFuZ2VJbnB1dC52YWx1ZSA9IG1pblJhbmdlICsgcmFuZ2VNaW5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pblByaWNlSW5wdXQudmFsdWUgPSBtaW5SYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIG1heFByaWNlSW5wdXQudmFsdWUgPSBtYXhSYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlU2VsZWN0ZWQuc3R5bGUubGVmdCA9IChtaW5SYW5nZSAvIG1pblJhbmdlSW5wdXQubWF4KSAqIDEwMCArIFwiJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VTZWxlY3RlZC5zdHlsZS5yaWdodCA9IDEwMCAtIChtYXhSYW5nZSAvIG1heFJhbmdlSW5wdXQubWF4KSAqIDEwMCArIFwiJVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC00LvRjyDQstCy0L7QtNCwINGG0LXQvVxyXG4gICAgICAgIFttaW5QcmljZUlucHV0LCBtYXhQcmljZUlucHV0XS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtaW5QcmljZSA9IHBhcnNlSW50KG1pblByaWNlSW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBsZXQgbWF4UHJpY2UgPSBwYXJzZUludChtYXhQcmljZUlucHV0LnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtYXhQcmljZSAtIG1pblByaWNlID49IHJhbmdlTWluICYmIG1heFByaWNlIDw9IG1heFJhbmdlSW5wdXQubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcmljZS1taW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5SYW5nZUlucHV0LnZhbHVlID0gbWluUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VTZWxlY3RlZC5zdHlsZS5sZWZ0ID0gKG1pblByaWNlIC8gbWluUmFuZ2VJbnB1dC5tYXgpICogMTAwICsgXCIlXCJcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhSYW5nZUlucHV0LnZhbHVlID0gbWF4UHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VTZWxlY3RlZC5zdHlsZS5yaWdodCA9IDEwMCAtIChtYXhQcmljZSAvIG1heFJhbmdlSW5wdXQubWF4KSAqIDEwMCArIFwiJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRDYXRhbG9nRmlsdGVyc1NjcmlwdHMpXHJcblxyXG5cclxuIl19
