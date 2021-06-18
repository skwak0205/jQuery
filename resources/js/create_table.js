//엘리먼트들에 대한 데이터를 테이블 형식으로 화면에 표현하기

function makeTable(elem) {  // elem : [Row, Row, Row, ....]
    $table = $("<table border=1>");  // var 생략 가능 -> 윈도우 객체

    //컬럼 정의하기
    for (var i = 0; i < 1; i++) {
        $tr = $("<tr>");

        for (var j = 0; j < elem.eq(0).children().length; j++) {
            $td = $("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
            $tr.append($td);
        }
        $table.append($tr);
    }

    //데이터 넣기
    for (var i = 0; i < elem.length; i++) {
        $tr = $("<tr>");
        for (var j = 0; j < elem.eq(i).children().length; j++) {
            $td = $("<td>").append(elem.eq(i).children().eq(j).text());
            $tr.append($td);
        }
        $table.append($tr);
    }

    //만들어진 테이블 반환
    return $table;
}