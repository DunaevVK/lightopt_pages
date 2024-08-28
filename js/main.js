'use strict';

/**
 * Debouncing
 *
 * @param {function} func - колбэк функция для дебаунса
 * @param {number} ms - задержка в миллисекундах
 * @returns {function} - новая дебаунс функция
 */
window.debounce = (func, ms) => {
    let timeoutId

    return function() {
        const context = this
        const args = arguments

        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            func.apply(context, args)
        }, ms)
    }
}
/**
 * Throttling
 *
 * @param {function} func - колбэк функция для тротлинга
 * @param {number} ms - задержка в миллисекундах
 * @returns {function} - новая троттл функция
 */
window.throttle = (func, ms) => {
    let isThrottled = false,
        savedArgs,
        savedThis

    function wrapper() {

        if (isThrottled) { // 2
            savedArgs = arguments
            savedThis = this
            return
        }

        func.apply(this, arguments) // 1

        isThrottled = true

        setTimeout(function() {
            isThrottled = false // 3
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }
        }, ms)
    }

    return wrapper
}
/**
 * Email address verification
 *
 * @param {string} email - The email, that needs to validating.
 */
window.validateEmail = (email) => {
    // Regular expression for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * Phone number verification
 *
 * @param {string} phone - The phone, that needs to validating.
 */
window.validatePhone = (phone) => {
    // Regular expression for phone
    const phoneRegex = /^7\d{10}$/
    return phoneRegex.test(phone)
}

const showSpinner = () => {
    const spinner = document.getElementById('spinner')
    spinner.classList.add('display')
    setTimeout(() => spinner.classList.add('visible'), 100)
}

const hideSpinner = () => {
    const spinner = document.getElementById('spinner')
    spinner.classList.remove('visible')
    setTimeout(() => spinner.classList.remove('display'), 1000)
}

window.addEventListener('load', () => {
    if (document.getElementById('spinner')) {
        window.spinner.show = showSpinner
        window.spinner.hide = hideSpinner
    }
})
const initHeaderScripts = () => {
    // Добавляем сюда все скрипты для хедера
    const menuBurger = document.querySelector(".header-info__menu--burger")
    const menu = document.querySelector(".nav-mobile")
    const closeMenu = document.querySelector(".nav-mobile__header_close")
    const openSubMenu = document.querySelector(".nav-mobile__open-icon")

    const initMenu = () => {
        openSubMenu.classList.remove('nav-mobile__open-icon_active');
        document.querySelector('.nav-mobile__list_drop').classList.remove('nav-mobile__list_drop-open')
        document.querySelectorAll('.drop-submenu__list').forEach(el => {
            el.classList.remove('drop-submenu__list_open')
        })
        document.querySelectorAll('.drop-submenu__item').forEach(el => {
            el.classList.remove('drop-submenu__item_open')
        })
    }

    menuBurger.addEventListener("click", () => {
        menu.classList.add("nav-mobile__open");
        initMenu();
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove("nav-mobile__open");
    })

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-mobile__link_drop') || e.target.classList.contains('nav-mobile__open-icon')) {
            e.preventDefault();
            e.target.closest('.nav-mobile__list').querySelector('.nav-mobile__list_drop').classList.toggle('nav-mobile__list_drop-open');
            openSubMenu.classList.toggle('nav-mobile__open-icon_active');
        }
        if (e.target.classList.contains('drop-submenu__title') || e.target.classList.contains('drop-submenu__plus')) {
            e.target.closest('.drop-submenu__item').querySelector('.drop-submenu__list').classList.toggle('drop-submenu__list_open')
            e.target.closest('.drop-submenu__item').classList.toggle('drop-submenu__item_open')
        }
    })
}

window.addEventListener("load", () => {
    initHeaderScripts()
})
// const someJsScriptShouldWorkOnEveryPageOfTheLayout = () => {
//     console.log('В этом файле можно добавлять скрипты которые должны работать на каждой странице сайта');
// }

// window.addEventListener('load', () => {
//     someJsScriptShouldWorkOnEveryPageOfTheLayout()
// })
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYm91bmMuanMiLCJ0aHJvdHRsZS5qcyIsInZhbGlkYXRlRW1haWwuanMiLCJ2YWxpZGF0ZVBob25lLmpzIiwic3Bpbm5lci9zY3JpcHQuanMiLCJoZWFkZXIvc2NyaXB0LmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERlYm91bmNpbmdcclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtINC60L7Qu9Cx0Y3QuiDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LTQtdCx0LDRg9C90YHQsFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbXMgLSDQt9Cw0LTQtdGA0LbQutCwINCyINC80LjQu9C70LjRgdC10LrRg9C90LTQsNGFXHJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gLSDQvdC+0LLQsNGPINC00LXQsdCw0YPQvdGBINGE0YPQvdC60YbQuNGPXHJcbiAqL1xyXG53aW5kb3cuZGVib3VuY2UgPSAoZnVuYywgbXMpID0+IHtcclxuICAgIGxldCB0aW1lb3V0SWRcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXNcclxuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXHJcblxyXG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXHJcbiAgICAgICAgfSwgbXMpXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogVGhyb3R0bGluZ1xyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0g0LrQvtC70LHRjdC6INGE0YPQvdC60YbQuNGPINC00LvRjyDRgtGA0L7RgtC70LjQvdCz0LBcclxuICogQHBhcmFtIHtudW1iZXJ9IG1zIC0g0LfQsNC00LXRgNC20LrQsCDQsiDQvNC40LvQu9C40YHQtdC60YPQvdC00LDRhVxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IC0g0L3QvtCy0LDRjyDRgtGA0L7RgtGC0Lsg0YTRg9C90LrRhtC40Y9cclxuICovXHJcbndpbmRvdy50aHJvdHRsZSA9IChmdW5jLCBtcykgPT4ge1xyXG4gICAgbGV0IGlzVGhyb3R0bGVkID0gZmFsc2UsXHJcbiAgICAgICAgc2F2ZWRBcmdzLFxyXG4gICAgICAgIHNhdmVkVGhpc1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XHJcblxyXG4gICAgICAgIGlmIChpc1Rocm90dGxlZCkgeyAvLyAyXHJcbiAgICAgICAgICAgIHNhdmVkQXJncyA9IGFyZ3VtZW50c1xyXG4gICAgICAgICAgICBzYXZlZFRoaXMgPSB0aGlzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8vIDFcclxuXHJcbiAgICAgICAgaXNUaHJvdHRsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlzVGhyb3R0bGVkID0gZmFsc2UgLy8gM1xyXG4gICAgICAgICAgICBpZiAoc2F2ZWRBcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGx5KHNhdmVkVGhpcywgc2F2ZWRBcmdzKVxyXG4gICAgICAgICAgICAgICAgc2F2ZWRBcmdzID0gc2F2ZWRUaGlzID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgbXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXJcclxufSIsIi8qKlxyXG4gKiBFbWFpbCBhZGRyZXNzIHZlcmlmaWNhdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1haWwgLSBUaGUgZW1haWwsIHRoYXQgbmVlZHMgdG8gdmFsaWRhdGluZy5cclxuICovXHJcbndpbmRvdy52YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIGVtYWlsXHJcbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC9cclxuICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpXHJcbn1cclxuIiwiLyoqXHJcbiAqIFBob25lIG51bWJlciB2ZXJpZmljYXRpb25cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHBob25lIC0gVGhlIHBob25lLCB0aGF0IG5lZWRzIHRvIHZhbGlkYXRpbmcuXHJcbiAqL1xyXG53aW5kb3cudmFsaWRhdGVQaG9uZSA9IChwaG9uZSkgPT4ge1xyXG4gICAgLy8gUmVndWxhciBleHByZXNzaW9uIGZvciBwaG9uZVxyXG4gICAgY29uc3QgcGhvbmVSZWdleCA9IC9eN1xcZHsxMH0kL1xyXG4gICAgcmV0dXJuIHBob25lUmVnZXgudGVzdChwaG9uZSlcclxufVxyXG4iLCJjb25zdCBzaG93U3Bpbm5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpXHJcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKSwgMTAwKVxyXG59XHJcblxyXG5jb25zdCBoaWRlU3Bpbm5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpXHJcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKSwgMTAwMClcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXInKSkge1xyXG4gICAgICAgIHdpbmRvdy5zcGlubmVyLnNob3cgPSBzaG93U3Bpbm5lclxyXG4gICAgICAgIHdpbmRvdy5zcGlubmVyLmhpZGUgPSBoaWRlU3Bpbm5lclxyXG4gICAgfVxyXG59KSIsImNvbnN0IGluaXRIZWFkZXJTY3JpcHRzID0gKCkgPT4ge1xyXG4gICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGB0Y7QtNCwINCy0YHQtSDRgdC60YDQuNC/0YLRiyDQtNC70Y8g0YXQtdC00LXRgNCwXHJcbiAgICBjb25zdCBtZW51QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItaW5mb19fbWVudS0tYnVyZ2VyXCIpXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbW9iaWxlXCIpXHJcbiAgICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1tb2JpbGVfX2hlYWRlcl9jbG9zZVwiKVxyXG4gICAgY29uc3Qgb3BlblN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1tb2JpbGVfX29wZW4taWNvblwiKVxyXG5cclxuICAgIGNvbnN0IGluaXRNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIG9wZW5TdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1tb2JpbGVfX29wZW4taWNvbl9hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1vYmlsZV9fbGlzdF9kcm9wJykuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW1vYmlsZV9fbGlzdF9kcm9wLW9wZW4nKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wLXN1Ym1lbnVfX2xpc3QnKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcC1zdWJtZW51X19saXN0X29wZW4nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Atc3VibWVudV9faXRlbScpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wLXN1Ym1lbnVfX2l0ZW1fb3BlbicpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtZW51QnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2LW1vYmlsZV9fb3BlblwiKTtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1tb2JpbGVfX29wZW5cIik7XHJcbiAgICB9KVxyXG5cclxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1tb2JpbGVfX2xpbmtfZHJvcCcpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2LW1vYmlsZV9fb3Blbi1pY29uJykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubmF2LW1vYmlsZV9fbGlzdCcpLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbW9iaWxlX19saXN0X2Ryb3AnKS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtbW9iaWxlX19saXN0X2Ryb3Atb3BlbicpO1xyXG4gICAgICAgICAgICBvcGVuU3ViTWVudS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtbW9iaWxlX19vcGVuLWljb25fYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Atc3VibWVudV9fdGl0bGUnKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Atc3VibWVudV9fcGx1cycpKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5kcm9wLXN1Ym1lbnVfX2l0ZW0nKS5xdWVyeVNlbGVjdG9yKCcuZHJvcC1zdWJtZW51X19saXN0JykuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcC1zdWJtZW51X19saXN0X29wZW4nKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuZHJvcC1zdWJtZW51X19pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcC1zdWJtZW51X19pdGVtX29wZW4nKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBpbml0SGVhZGVyU2NyaXB0cygpXHJcbn0pIiwiLy8gY29uc3Qgc29tZUpzU2NyaXB0U2hvdWxkV29ya09uRXZlcnlQYWdlT2ZUaGVMYXlvdXQgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygn0JIg0Y3RgtC+0Lwg0YTQsNC50LvQtSDQvNC+0LbQvdC+INC00L7QsdCw0LLQu9GP0YLRjCDRgdC60YDQuNC/0YLRiyDQutC+0YLQvtGA0YvQtSDQtNC+0LvQttC90Ysg0YDQsNCx0L7RgtCw0YLRjCDQvdCwINC60LDQttC00L7QuSDRgdGC0YDQsNC90LjRhtC1INGB0LDQudGC0LAnKTtcclxuLy8gfVxyXG5cclxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbi8vICAgICBzb21lSnNTY3JpcHRTaG91bGRXb3JrT25FdmVyeVBhZ2VPZlRoZUxheW91dCgpXHJcbi8vIH0pIl19
