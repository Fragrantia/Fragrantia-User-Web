$(function() {
    //카카오 맵 적용할 요소 선택
    var container = document.getElementById('map');

    // 카카오 맵 초기 옵션 적용
    var options = {
        center: new kakao.maps.LatLng(37.501921, 127.026946),
        level: 5
    };
    // 카카오 맵 생성
    var map = new kakao.maps.Map(container, options);

    // 매장 위치 배열
    var stores = [
        {
            name: 'Gangnam Store',
            address: '서울 강남구 미추홀동 130번길로 미누리 건물',
            tel: '02-0000-0000',
            latlng: new kakao.maps.LatLng(37.501921, 127.026946),
            image: '../../images/shopInfo.jpg',
            description:
                '느낌이 새롭고 더욱 멋진 공간으로 돌아왔습니다.'
                + '<br/>' + '<br/>' +
                '브랜드의 철학과 컨셉에 맞게 재해석된 인테리어'
                + '<br/>' + '<br/>' +
                '디자인과 혁신적인 브랜드 경험을 경험할 수 있는 공간'
                + '<br/>' + '<br/>' +
                ' 지금 바로 여러분을 기다리고 있습니다.'
                + '<br/>' + '<br/>' +
                '새로운 컬렉션과 제품들을 만나보며, 트렌디한 분위기를 느끼며, '
                + '<br/>' + '<br/>' +
                '향의 세계로 떠나보세요. 향의 두 번째 이야기 여러분을 반겨드립니다.'
        },
        {
            name: '매장2',
            address: '서울시 서초구 양재동',
            latlng: new kakao.maps.LatLng(37.470576, 127.040736),
            image: 'https://picsum.photos/250',
            description: '매장 2에 대한 설명입니다.'
        },
        {
            name: '매장3',
            address: '서울시 송파구 잠실동',
            latlng: new kakao.maps.LatLng(37.514366, 127.101938),
            image: 'https://picsum.photos/250',
            description: '매장 3에 대한 설명입니다.'
        }
    ];

    // 맵 위치에 맞게 경계 수준 적용 준비
    var bounds = new kakao.maps.LatLngBounds();

    // 마커 적용
    var markers = [];
    for (var i = 0; i < stores.length; i++) {
        var marker = new kakao.maps.Marker({
            position: stores[i].latlng
        });
        marker.setMap(map);
        markers.push(marker);

        bounds.extend(stores[i].latlng);

        // 마커 클릭 시 표시돌 모달 적용
        kakao.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                var modal = document.getElementById('store_modal');
                var store_name = modal.querySelector('.store_name');
                var store_address = modal.querySelector('.store_address');
                var store_tel = modal.querySelector('.store_tel');
                var store_image = modal.querySelector('.store_image');
                var store_description = modal.querySelector('.store_description');

                store_image.src = stores[i].image;
                store_name.innerHTML = stores[i].name;
                store_description.innerHTML = stores[i].description;
                store_address.innerHTML = stores[i].address;
                store_tel.innerHTML = stores[i].tel;

                modal.style.display = 'block';
            }
        })(marker, i));
    }

    // 맵 위치에 맞게 경계 수준 적용
    map.setBounds(bounds);

    var modal = document.getElementById('store_modal');
    var span = document.getElementsByClassName('close')[0];

    // 모달 스타일 삭제
    span.onclick = function () {
        modal.style.display = 'none';
    };

    // 모달 닫는 이벤트 추가
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});