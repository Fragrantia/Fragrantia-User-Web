// 페이지 맨 위로 이동하는 함수
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // 상단 이동, 부드럽게
}

// 스크롤 위치가 20px 이상일 때 위로 가기 버튼 보이기
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-up").style.display = "block";
    } else {
        document.getElementById("btn-up").style.display = "none";
    }
}