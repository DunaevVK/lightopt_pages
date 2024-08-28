const initCatalogScripts = () => {
    const changer = document.querySelector('.card-top__quantity_changer')
    const changerInput = changer.querySelector('.changer__input')
    const changerMinus = changer.querySelector('.changer__btn_minus')
    const changerPlus = changer.querySelector('.changer__btn_plus')
    const cardSliderImages = document.querySelector('.card-slider__images')
    const cardSliderMainImg = document.querySelector('.card-slider__main img')
    const cardSliderImg = document.querySelectorAll('.card-slider__image')

    function allowNumbersOnly(e) {
        let code = (e.which) ? e.which : e.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }

    const customSelect = document.querySelectorAll('.custom-select')
    customSelect.forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('custom-select--open')

            if (e.target.classList.contains('custom-select__option')) {
                e.currentTarget.querySelector('.custom-select__value').textContent = e.target.textContent
            }
        })
    })

    cardSliderImages.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-slider__image')) {
            let src = e.target.querySelector('img').getAttribute('src')
            cardSliderMainImg.setAttribute('src', src)
        }

        cardSliderImg.forEach(el => {
            el.classList.remove('card-slider__image_active')
        })

        e.target.classList.add('card-slider__image_active')
    })

    let count = changerInput.value

    changerInput.addEventListener('keyup', (e) => {
        if (e.currentTarget.value == '0') {
            e.currentTarget.value = 1
        }

        count = changerInput.value
    })

    changerInput.addEventListener('keypress', (e) => {
        allowNumbersOnly(e);
    })

    changerInput.addEventListener('change', (e) => {
        if (!e.currentTarget.value || e.currentTarget.value < 1) {
            e.currentTarget.value = 1
        }
        count = changerInput.value;
    })

    changerInput.addEventListener('input', (e) => {
        if (e.currentTarget.value <= 1) {
            changerMinus.classList.add('changer__btn_disabled')
            changerPlus.classList.remove('changer__btn_disabled')
        } else {
            changerMinus.classList.remove('changer__btn_disabled')
        }

        if (e.currentTarget.value > 9998) {
            changerMinus.classList.remove('changer__btn_disabled')
            changerPlus.classList.add('changer__btn_disabled')
        } else {
            changerPlus.classList.remove('changer__btn_disabled')
        }
    })

    changerMinus.addEventListener('click', (e) => {
        count--

        changerInput.value = count

        if (!changerInput.value) {
            changerInput.value = 1
            changerMinus.classList.add('changer__btn_disabled')
            changerPlus.classList.remove('changer__btn_disabled')
        }

        if (changerInput.value <= 1) {
            changerInput.value = 1
            changerMinus.classList.add('changer__btn_disabled')
            changerPlus.classList.remove('changer__btn_disabled')
        } else {
            changerMinus.classList.remove('changer__btn_disabled')
        }
    })

    changerPlus.addEventListener('click', (e) => {
        count++

        changerMinus.classList.remove('changer__btn_disabled')

        changerInput.value = count

        if (changerInput.value > 9998) {
            changerInput.value = 9999
            changerPlus.classList.add('changer__btn_disabled')
        } else {
            changerPlus.classList.remove('changer__btn_disabled')
        }
    })
}

window.addEventListener('load', initCatalogScripts)
const initCardBottom = () => {
    const cardFilterTop = document.querySelectorAll('.card-filter__top')
    const cardFilterTopSub = document.querySelectorAll('.card-filter__top_sub')
    const downloadDocsTop = document.querySelectorAll('.download-docs__top')
    cardFilterTop.forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.card-filter').classList.toggle('card-filter--open')
            el.querySelector('.card-filter__title').classList.toggle('card-filter__title--active')

        })
    })
    cardFilterTopSub.forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.card-filter__bottom').classList.toggle('card-filter__bottom--open')
            el.querySelector('.card-filter__title').classList.toggle('card-filter__title--active')

        })
    })
    downloadDocsTop.forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.download-docs').classList.toggle('download-docs--open')
            el.querySelector('.download-docs__title').classList.toggle('download-docs__title--active')

        })
    })
}

window.addEventListener('load', initCardBottom)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQvY29tcG9uZW50cy9jYXJkLWNvbnRlbnRfX3RvcC9jYXJkLWNvbnRlbnRfX3RvcC5qcyIsImNhcmQvc2NyaXB0LmpzIiwiY2FyZC9jb21wb25lbnRzL2NhcmQtY29udGVudF9fYm90dG9tL2NhcmQtY29udGVudF9fYm90dG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqT0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdENhdGFsb2dTY3JpcHRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2hhbmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRvcF9fcXVhbnRpdHlfY2hhbmdlcicpXHJcbiAgICBjb25zdCBjaGFuZ2VySW5wdXQgPSBjaGFuZ2VyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2VyX19pbnB1dCcpXHJcbiAgICBjb25zdCBjaGFuZ2VyTWludXMgPSBjaGFuZ2VyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2VyX19idG5fbWludXMnKVxyXG4gICAgY29uc3QgY2hhbmdlclBsdXMgPSBjaGFuZ2VyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2VyX19idG5fcGx1cycpXHJcbiAgICBjb25zdCBjYXJkU2xpZGVySW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtc2xpZGVyX19pbWFnZXMnKVxyXG4gICAgY29uc3QgY2FyZFNsaWRlck1haW5JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1zbGlkZXJfX21haW4gaW1nJylcclxuICAgIGNvbnN0IGNhcmRTbGlkZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1zbGlkZXJfX2ltYWdlJylcclxuXHJcbiAgICBmdW5jdGlvbiBhbGxvd051bWJlcnNPbmx5KGUpIHtcclxuICAgICAgICBsZXQgY29kZSA9IChlLndoaWNoKSA/IGUud2hpY2ggOiBlLmtleUNvZGU7XHJcbiAgICAgICAgaWYgKGNvZGUgPiAzMSAmJiAoY29kZSA8IDQ4IHx8IGNvZGUgPiA1NykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdCcpXHJcbiAgICBjdXN0b21TZWxlY3QuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXHJcblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXN0b20tc2VsZWN0X19vcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X192YWx1ZScpLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNhcmRTbGlkZXJJbWFnZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtc2xpZGVyX19pbWFnZScpKSB7XHJcbiAgICAgICAgICAgIGxldCBzcmMgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgICAgICAgIGNhcmRTbGlkZXJNYWluSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FyZFNsaWRlckltZy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC1zbGlkZXJfX2ltYWdlX2FjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1zbGlkZXJfX2ltYWdlX2FjdGl2ZScpXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBjb3VudCA9IGNoYW5nZXJJbnB1dC52YWx1ZVxyXG5cclxuICAgIGNoYW5nZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA9PSAnMCcpIHtcclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY291bnQgPSBjaGFuZ2VySW5wdXQudmFsdWVcclxuICAgIH0pXHJcblxyXG4gICAgY2hhbmdlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgICAgICBhbGxvd051bWJlcnNPbmx5KGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBjaGFuZ2VySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoIWUuY3VycmVudFRhcmdldC52YWx1ZSB8fCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQgPSBjaGFuZ2VySW5wdXQudmFsdWU7XHJcbiAgICB9KVxyXG5cclxuICAgIGNoYW5nZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA8PSAxKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZXJNaW51cy5jbGFzc0xpc3QuYWRkKCdjaGFuZ2VyX19idG5fZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICBjaGFuZ2VyUGx1cy5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2VyX19idG5fZGlzYWJsZWQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoYW5nZXJNaW51cy5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2VyX19idG5fZGlzYWJsZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA+IDk5OTgpIHtcclxuICAgICAgICAgICAgY2hhbmdlck1pbnVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZXJfX2J0bl9kaXNhYmxlZCcpXHJcbiAgICAgICAgICAgIGNoYW5nZXJQbHVzLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZXJfX2J0bl9kaXNhYmxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hhbmdlclBsdXMuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlcl9fYnRuX2Rpc2FibGVkJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNoYW5nZXJNaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY291bnQtLVxyXG5cclxuICAgICAgICBjaGFuZ2VySW5wdXQudmFsdWUgPSBjb3VudFxyXG5cclxuICAgICAgICBpZiAoIWNoYW5nZXJJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjaGFuZ2VySW5wdXQudmFsdWUgPSAxXHJcbiAgICAgICAgICAgIGNoYW5nZXJNaW51cy5jbGFzc0xpc3QuYWRkKCdjaGFuZ2VyX19idG5fZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICBjaGFuZ2VyUGx1cy5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2VyX19idG5fZGlzYWJsZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXJJbnB1dC52YWx1ZSA8PSAxKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZXJJbnB1dC52YWx1ZSA9IDFcclxuICAgICAgICAgICAgY2hhbmdlck1pbnVzLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZXJfX2J0bl9kaXNhYmxlZCcpXHJcbiAgICAgICAgICAgIGNoYW5nZXJQbHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZXJfX2J0bl9kaXNhYmxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hhbmdlck1pbnVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZXJfX2J0bl9kaXNhYmxlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjaGFuZ2VyUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY291bnQrK1xyXG5cclxuICAgICAgICBjaGFuZ2VyTWludXMuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlcl9fYnRuX2Rpc2FibGVkJylcclxuXHJcbiAgICAgICAgY2hhbmdlcklucHV0LnZhbHVlID0gY291bnRcclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXJJbnB1dC52YWx1ZSA+IDk5OTgpIHtcclxuICAgICAgICAgICAgY2hhbmdlcklucHV0LnZhbHVlID0gOTk5OVxyXG4gICAgICAgICAgICBjaGFuZ2VyUGx1cy5jbGFzc0xpc3QuYWRkKCdjaGFuZ2VyX19idG5fZGlzYWJsZWQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoYW5nZXJQbHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZXJfX2J0bl9kaXNhYmxlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0Q2F0YWxvZ1NjcmlwdHMpIiwiLy89cmVxdWlyZSBjb21wb25lbnRzL2NhcmQtY29udGVudF9fdG9wL2NhcmQtY29udGVudF9fdG9wLmpzXHJcbi8vPXJlcXVpcmUgY29tcG9uZW50cy9jYXJkLWNvbnRlbnRfX2JvdHRvbS9jYXJkLWNvbnRlbnRfX2JvdHRvbS5qcyIsImNvbnN0IGluaXRDYXJkQm90dG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZEZpbHRlclRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWZpbHRlcl9fdG9wJylcclxuICAgIGNvbnN0IGNhcmRGaWx0ZXJUb3BTdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1maWx0ZXJfX3RvcF9zdWInKVxyXG4gICAgY29uc3QgZG93bmxvYWREb2NzVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvd25sb2FkLWRvY3NfX3RvcCcpXHJcbiAgICBjYXJkRmlsdGVyVG9wLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbG9zZXN0KCcuY2FyZC1maWx0ZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkLWZpbHRlci0tb3BlbicpXHJcbiAgICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWZpbHRlcl9fdGl0bGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkLWZpbHRlcl9fdGl0bGUtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgY2FyZEZpbHRlclRvcFN1Yi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuY2xvc2VzdCgnLmNhcmQtZmlsdGVyX19ib3R0b20nKS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkLWZpbHRlcl9fYm90dG9tLS1vcGVuJylcclxuICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLmNhcmQtZmlsdGVyX190aXRsZScpLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmQtZmlsdGVyX190aXRsZS0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkb3dubG9hZERvY3NUb3AuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLmNsb3Nlc3QoJy5kb3dubG9hZC1kb2NzJykuY2xhc3NMaXN0LnRvZ2dsZSgnZG93bmxvYWQtZG9jcy0tb3BlbicpXHJcbiAgICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5kb3dubG9hZC1kb2NzX190aXRsZScpLmNsYXNzTGlzdC50b2dnbGUoJ2Rvd25sb2FkLWRvY3NfX3RpdGxlLS1hY3RpdmUnKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0Q2FyZEJvdHRvbSkiXX0=
