const toggleFilter = document.querySelector('.toggleFilter');
const filter = document.querySelector('.filter');

toggleFilter.addEventListener('click', () => {
    $(filter).fadeToggle();
});

$(document).on('click', (event) => {

    // 필터 영역 내부를 클릭한 경우, 이벤트를 발생시키지 않음
    if (
        $(event.target).closest('.filter').length ||
        $(event.target).closest('.toggleFilter').length
    ) {
        return;
    }

    // 필터 영역 이외의 영역을 클릭한 경우, 필터를 닫음
    $(filter).fadeOut();
});


const search = document.querySelector('input.search');
const items = document.querySelectorAll('div.itembox');

search.addEventListener('keyup', function (e) {
    const word = (e.target.value).toLowerCase();
    for (var i = 0; i < items.length; i++) {
        if (items[i].id.toLowerCase().includes(word) || word.length == 0) {
            items[i].style.setProperty('order', i);
            items[i].style.webkitFilter = 'blur(0)';
        } else {
            items[i].style.setProperty('order', i + 999);
            items[i].style.webkitFilter = 'blur(2px)';

        }
    }
})

