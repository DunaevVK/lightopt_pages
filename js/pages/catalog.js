let prevCurrentHeight

function initToggleCatalogList() {
    const btns = [
        ...document.querySelectorAll('.catalog-page__title'),
        ...document.querySelectorAll('.catalog-page__item-title')
    ]

    if (!btns) return

    btns.forEach(el => el.addEventListener('click', () => {
        if (el.classList.contains('catalog-page__title') && window.innerWidth >= 1200) return

        const isOpen = el.classList.contains('open')

        if (window.innerWidth >= 1200) {
            closeAllCollapses(el)
        }

        if (isOpen) {
            collapsesCloser(el)
            if (el.nextElementSibling) collapsesCloser(el.nextElementSibling)
        } else {
            el.classList.add('open')
            if (el.nextElementSibling) el.nextElementSibling.classList.add('open')
        }

        if (window.innerWidth >= 1200) {
            resetAllCardsHeight(el)
            fixAllCardsHeight()
        }
    }))
}

function collapsesCloser(node) {
    // закрываем текущий
    node.classList.remove('open')

    // закрываем вложенные
    node.querySelectorAll('.open')
        .forEach(i => i.classList.remove('open'))
}

function closeAllCollapses(node) {
    const allCards = document.querySelectorAll('.catalog-page__card')
    const currentCard = node.closest('.catalog-page__card')

    allCards.forEach(card => {
        if (card !== currentCard) { // Если не текущая карточка, закрываем все открытые
            card.querySelectorAll('.open')
                .forEach(el => el.classList.remove('open'))
        } else {
            const allRoots = card.querySelectorAll('.catalog-page__root')
            const currentRoot = node.closest('.catalog-page__root')

            allRoots.forEach(root => { // В текущей карточке закрываем все в не текущем руте
                if (root !== currentRoot) {
                    root.querySelectorAll('.open')
                        .forEach(el => el.classList.remove('open'))
                }
            })
        }
    })
}

function resetAllCardsHeight(node) {
    const currentCard = node ? node.closest('.catalog-page__card') : null
    const allCards = document.querySelectorAll('.catalog-page__card')

    allCards.forEach(card => {
        if (card !== currentCard) {
            card.removeAttribute('style')
            card.style.transition = 'all .1s linear'
        } else {
            prevCurrentHeight = card.style.minHeight === '' ? null : parseFloat(card.style.minHeight)
            card.removeAttribute('style')
        }
    })
}

function fixAllCardsHeight() {
    const collapses = document.querySelectorAll('.catalog-page__collapse.open')
    let collapseBottom = 0
    let collapseNode

    collapses.forEach(collapse => {
        const bottom = collapse.getBoundingClientRect().bottom + window.pageYOffset
        if (bottom > collapseBottom) {
            collapseBottom = bottom
            collapseNode = collapse
        }
    })

    if (!collapseNode) {
        resetAllCardsHeight()
        return
    }

    const card = collapseNode.closest('.catalog-page__card')
    const cardBottom = card.getBoundingClientRect().bottom + window.pageYOffset

    if (collapseBottom > cardBottom) {
        const delta = collapseBottom - cardBottom
        const cardHeight = card.offsetHeight
        const cardPaddingBottom = parseFloat(window.getComputedStyle(card).paddingBottom)
        const newHeight = cardHeight + delta + cardPaddingBottom

        card.style.transition = null
        card.style.minHeight = prevCurrentHeight + 'px'

        setTimeout(() => {
            card.style.transition = 'all .1s linear'
            card.style.minHeight = newHeight + 'px'
        }, 10)
    }
}

function initLinkHover() {
    const actions = document.querySelectorAll('[data-pic]')

    if (!actions) return

    const updatePic = window.debounce((e, reset) => {

        if (window.innerWidth < 1200) return

        const picNode = e.target.closest('.catalog-page__card')
                .querySelector('.catalog-page__pic')

        if (reset) {
            picNode.removeAttribute('style')
            return
        }

        picNode.style.backgroundImage = `url(${e.target.dataset.pic})`
    }, 300)

    actions.forEach(el => {
        el.addEventListener('mouseenter', e => updatePic(e))
        el.addEventListener('mouseleave', e => updatePic(e, true))
    })
}

window.addEventListener('load', () => {
    initToggleCatalogList()
    initLinkHover()
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cvY29tcG9uZW50cy9jYXRhbG9nL2NhdGFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjYXRhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHByZXZDdXJyZW50SGVpZ2h0XHJcblxyXG5mdW5jdGlvbiBpbml0VG9nZ2xlQ2F0YWxvZ0xpc3QoKSB7XHJcbiAgICBjb25zdCBidG5zID0gW1xyXG4gICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLXBhZ2VfX3RpdGxlJyksXHJcbiAgICAgICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctcGFnZV9faXRlbS10aXRsZScpXHJcbiAgICBdXHJcblxyXG4gICAgaWYgKCFidG5zKSByZXR1cm5cclxuXHJcbiAgICBidG5zLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2F0YWxvZy1wYWdlX190aXRsZScpICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDEyMDApIHJldHVyblxyXG5cclxuICAgICAgICBjb25zdCBpc09wZW4gPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKVxyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTIwMCkge1xyXG4gICAgICAgICAgICBjbG9zZUFsbENvbGxhcHNlcyhlbClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgY29sbGFwc2VzQ2xvc2VyKGVsKVxyXG4gICAgICAgICAgICBpZiAoZWwubmV4dEVsZW1lbnRTaWJsaW5nKSBjb2xsYXBzZXNDbG9zZXIoZWwubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgICAgICAgICBpZiAoZWwubmV4dEVsZW1lbnRTaWJsaW5nKSBlbC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTIwMCkge1xyXG4gICAgICAgICAgICByZXNldEFsbENhcmRzSGVpZ2h0KGVsKVxyXG4gICAgICAgICAgICBmaXhBbGxDYXJkc0hlaWdodCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxhcHNlc0Nsb3Nlcihub2RlKSB7XHJcbiAgICAvLyDQt9Cw0LrRgNGL0LLQsNC10Lwg0YLQtdC60YPRidC40LlcclxuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcblxyXG4gICAgLy8g0LfQsNC60YDRi9Cy0LDQtdC8INCy0LvQvtC20LXQvdC90YvQtVxyXG4gICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcub3BlbicpXHJcbiAgICAgICAgLmZvckVhY2goaSA9PiBpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VBbGxDb2xsYXBzZXMobm9kZSkge1xyXG4gICAgY29uc3QgYWxsQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1wYWdlX19jYXJkJylcclxuICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gbm9kZS5jbG9zZXN0KCcuY2F0YWxvZy1wYWdlX19jYXJkJylcclxuXHJcbiAgICBhbGxDYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgIGlmIChjYXJkICE9PSBjdXJyZW50Q2FyZCkgeyAvLyDQldGB0LvQuCDQvdC1INGC0LXQutGD0YnQsNGPINC60LDRgNGC0L7Rh9C60LAsINC30LDQutGA0YvQstCw0LXQvCDQstGB0LUg0L7RgtC60YDRi9GC0YvQtVxyXG4gICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuJylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxSb290cyA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctcGFnZV9fcm9vdCcpXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSb290ID0gbm9kZS5jbG9zZXN0KCcuY2F0YWxvZy1wYWdlX19yb290JylcclxuXHJcbiAgICAgICAgICAgIGFsbFJvb3RzLmZvckVhY2gocm9vdCA9PiB7IC8vINCSINGC0LXQutGD0YnQtdC5INC60LDRgNGC0L7Rh9C60LUg0LfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDQsiDQvdC1INGC0LXQutGD0YnQtdC8INGA0YPRgtC1XHJcbiAgICAgICAgICAgICAgICBpZiAocm9vdCAhPT0gY3VycmVudFJvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0QWxsQ2FyZHNIZWlnaHQobm9kZSkge1xyXG4gICAgY29uc3QgY3VycmVudENhcmQgPSBub2RlID8gbm9kZS5jbG9zZXN0KCcuY2F0YWxvZy1wYWdlX19jYXJkJykgOiBudWxsXHJcbiAgICBjb25zdCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLXBhZ2VfX2NhcmQnKVxyXG5cclxuICAgIGFsbENhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgaWYgKGNhcmQgIT09IGN1cnJlbnRDYXJkKSB7XHJcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIGNhcmQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgLjFzIGxpbmVhcidcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcmV2Q3VycmVudEhlaWdodCA9IGNhcmQuc3R5bGUubWluSGVpZ2h0ID09PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KGNhcmQuc3R5bGUubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeEFsbENhcmRzSGVpZ2h0KCkge1xyXG4gICAgY29uc3QgY29sbGFwc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctcGFnZV9fY29sbGFwc2Uub3BlbicpXHJcbiAgICBsZXQgY29sbGFwc2VCb3R0b20gPSAwXHJcbiAgICBsZXQgY29sbGFwc2VOb2RlXHJcblxyXG4gICAgY29sbGFwc2VzLmZvckVhY2goY29sbGFwc2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IGNvbGxhcHNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgICAgIGlmIChib3R0b20gPiBjb2xsYXBzZUJvdHRvbSkge1xyXG4gICAgICAgICAgICBjb2xsYXBzZUJvdHRvbSA9IGJvdHRvbVxyXG4gICAgICAgICAgICBjb2xsYXBzZU5vZGUgPSBjb2xsYXBzZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFjb2xsYXBzZU5vZGUpIHtcclxuICAgICAgICByZXNldEFsbENhcmRzSGVpZ2h0KClcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJkID0gY29sbGFwc2VOb2RlLmNsb3Nlc3QoJy5jYXRhbG9nLXBhZ2VfX2NhcmQnKVxyXG4gICAgY29uc3QgY2FyZEJvdHRvbSA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tICsgd2luZG93LnBhZ2VZT2Zmc2V0XHJcblxyXG4gICAgaWYgKGNvbGxhcHNlQm90dG9tID4gY2FyZEJvdHRvbSkge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gY29sbGFwc2VCb3R0b20gLSBjYXJkQm90dG9tXHJcbiAgICAgICAgY29uc3QgY2FyZEhlaWdodCA9IGNhcmQub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgY29uc3QgY2FyZFBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhcmQpLnBhZGRpbmdCb3R0b20pXHJcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gY2FyZEhlaWdodCArIGRlbHRhICsgY2FyZFBhZGRpbmdCb3R0b21cclxuXHJcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbFxyXG4gICAgICAgIGNhcmQuc3R5bGUubWluSGVpZ2h0ID0gcHJldkN1cnJlbnRIZWlnaHQgKyAncHgnXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIC4xcyBsaW5lYXInXHJcbiAgICAgICAgICAgIGNhcmQuc3R5bGUubWluSGVpZ2h0ID0gbmV3SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIH0sIDEwKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TGlua0hvdmVyKCkge1xyXG4gICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBpY10nKVxyXG5cclxuICAgIGlmICghYWN0aW9ucykgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgdXBkYXRlUGljID0gd2luZG93LmRlYm91bmNlKChlLCByZXNldCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMjAwKSByZXR1cm5cclxuXHJcbiAgICAgICAgY29uc3QgcGljTm9kZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXRhbG9nLXBhZ2VfX2NhcmQnKVxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nLXBhZ2VfX3BpYycpXHJcblxyXG4gICAgICAgIGlmIChyZXNldCkge1xyXG4gICAgICAgICAgICBwaWNOb2RlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBpY05vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2UudGFyZ2V0LmRhdGFzZXQucGljfSlgXHJcbiAgICB9LCAzMDApXHJcblxyXG4gICAgYWN0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZSA9PiB1cGRhdGVQaWMoZSkpXHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4gdXBkYXRlUGljKGUsIHRydWUpKVxyXG4gICAgfSlcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBpbml0VG9nZ2xlQ2F0YWxvZ0xpc3QoKVxyXG4gICAgaW5pdExpbmtIb3ZlcigpXHJcbn0pIl19
