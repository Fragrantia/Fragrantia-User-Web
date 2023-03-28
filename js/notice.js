// colspan size 조절 함수
let reColspan = function () {
    if ($(window).width() <= 768) {
        // colspan 속성이 5인 td 요소를 찾아서
        $("tr.notice-content td[colspan='5']").each(function () {
            // colspan 속성 값을 3으로 변경
            $(this).attr("colspan", "3");
        });
    }
    // 데스크탑 버전인 경우
    else {
        // colspan 속성이 3인 td 요소를 찾아서
        $("tr.notice-content td[colspan='3']").each(function () {
            // colspan 속성 값을 5로 변경
            $(this).attr("colspan", "5");
        });
    }
}

$(document).ready(function () {
    $('.notice-header').click(function () {
        $(this).closest('tr').next('.notice-content').toggle();
    });

    //시작 할때 colspan 화면 크기에 맞게 설정
    reColspan()
});


$(window).resize(
    //화면 바꿀 때 colspan 화면 크기에 맞게 설정
    reColspan
);
