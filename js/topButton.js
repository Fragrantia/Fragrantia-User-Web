// 페이지 맨 위로 이동하는 함수
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
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