var biz_title_regulation = "규제현황 점수는 어떻게 계산될까요?"
var biz_info_regulation =
"<ul style='padding-left: 13px'>"
+"<li>규제현황은 총점에 대한 감점요소로 적용됩니다.<br><br>"

+"<li>투기과열지역인 경우, 총점의 15%를 감점시키며, <br>"
+"조정대상지역인 경우, 총점의 10%를 감점시킵니다.<br><br>"

+"<li>두 가지 규제가 동시에 있는 경우, 총점의 25%를 감점시키게 됩니다.<br>"
+"</ul>"
+"<hr style='padding: 0px'>"
+"<img src = './regulation_loan.png' width='100%'></img>"
+"<hr style='padding: 0px'>"
+"<li>자료출처: 국토부<br>"
+"<li>데이터 알고리즘: 아파트랭크"

var biz_title_pop = "인구 점수는 어떻게 평가될까요?"
var biz_info_pop =
"<ul style='padding-left: 13px'>"
+ "<li>인구 점수는 '인구수'와 '인구증감률'의 2가지 요소로 판정됩니다.<br><br>"
+ "<li>인구수는 '인구수 100,000명 = 50점' 기준이며 200,000명 이상을 100점, 50,000명 이하를 0점으로 인구수에 따라 차등점수가 부여됩니다.<br>"
+ "이 때 200,000명 초과되어도 100점으로 배정 되며 50,000미만이 되도 0점으로 배정됩니다.<br><br>"
+ "<li>인구수 점수는 종합 총점에서 ##%의 비중을 차지합니다.<br><br>"
+ "<li>인구증감률은 이전달 대비 '상승,하락률 0% = 50점' 기준으로 0.05% 증가 또는 감소에 따라 10점씩 가점 또는 감점됩니다.<br><br>"
+ "<li>인구증감률 점수는 최대 100점, 최소 0점으로 배정되며, 종합 총점에서 ##%의 비중을 차지합니다.<br>"
+"</ul>"
+"<hr style='padding: 0px'>"
+ "<li>자료출처: 행정안전부<br>"
+ "<li>데이터 알고리즘: 아파트랭크"

var biz_title_price = "매매가격 점수는 어떻게 평가될까요?"
var biz_info_price =
"<ul style='padding-left: 13px'>"
+"<li>매매가격 점수는 3개월 상승률과 1개월 상승률의 편차를 사용합니다.<br><br>"
+"<li>편차가 중립 인플레이션률인 +3% 이내인 경우를 50점으로 시작하여 총 6가지 결과가 도출됩니다.<br><br>"

+"<li>각 결과의 계산 방식은 다음과 같습니다.<br>"
+"1) 1개월 상승률 > 3개월 상승률인 경우,<br>"
+"&nbsp- 1개월 < 100,  3개월 < 100 = 약한 하락<br>"
+"&nbsp- 1개월 > 100, 3개월 < 100 = 상승 전환<br>"
+"&nbsp- 1개월 > 100, 3개월 > 100 = 강한 상승<br><br>"

+"2) 1개월 상승률 < 3개월 상승률인 경우,<br>"
+"&nbsp- 1개월 < 100, 3개월 < 100 = 강한 하락<br>"
+"&nbsp- 1개월 < 100, 3개월 > 100 = 하락 전환<br>"
+"&nbsp- 1개월 > 100, 3개월 > 100 = 약한 상승<br><br>"

+"<li>이에 따른 점수의 계산방식은 상승률 편차에 연동되어 점수가 산정되며, 이에 대한 알고리즘은 복잡성으로 인해 설명드리기 어렵습니다.<br><br>"
+"<li>매매가격 점수는 최대 100점, 최소 0점으로 배정되며, 종합 총점에서 ##%의 비중을 차지합니다.<br>"
+"</ul>"
+"<hr style='padding: 0px'>"
+"자료출처: 한국부동산원<br>"
+"데이터 알고리즘: 아파트랭크"

var biz_title_deal = "거래량 점수는 어떻게 계산될까요?"
var biz_info_deal =
"<ul style='padding-left: 13px'>"
+"<li>거래량 점수는 10년 평균 거래량 대비 이달의 거래량 비율을 사용합니다.<br><br>"
+"<li>편차 ±5% 이내의 경우를 50점으로 시작하며, 40% 이하로 하락한 경우 0점, 100% 이상 상승한 경우를 100점으로 편차에 따라 차등점수가 부여됩니다.<br><br>"
+"<li>이 때 100%가 초과되어도 100점으로 배정 되며 40%미만이 되도 0점으로 배정됩니다.<br><br>"
+"<li>거래량 점수는 종합 총점에서 ##%의 비중을 차지합니다.<br>"
+"</ul>"
+"<hr style='padding: 0px'>"
+"<li>자료출처: 한국부동산원<br>"
+"<li>데이터 알고리즘: 아파트랭크"

var biz_title_rent_rate = "전세가율 점수는 어떻게 평가될까요?"
var biz_info_rent_rate =
"<ul style='padding-left: 13px'>"
+"<li>전세가율 점수는 10년 평균 전세가율과 이달의 전세가율 편차를 사용합니다.<br><br>"
+"<li>편차 ±5% 이내의 경우를 50점으로 시작하여, 3개월 매매흐름 결과와 연동됩니다.<br><br>"

+"1) 10년 평균 전세가율 > 현재 전세가율인 경우,<br>"
+"&nbsp- 매매흐름 '강한 상승' = 매우좋음 (전세가가 매매가를 밀어올리는 경우)<br>"
+"&nbsp- 매매흐름 '약한 상승' = 좋음 (전세가가 매매가를 밀어올리는 경우)<br>"
+"&nbsp- 매매흐름 '상승 전환' = 좋음 (전세가가 매매가를 밀어올리는 경우)<br>"
+"&nbsp- 매매흐름 '강한 하락' = 매우나쁨 (깡통 전세 현상 우려)<br>"
+"&nbsp- 매매흐름 '약한 하락' = 나쁨 (전세 보합, 매매 하락 우려)<br>"
+"&nbsp- 매매흐름 '하락 전환' = 나쁨 (전세 보합, 매매 하락 우려)<br><br>"

+"2) 10년 평균 전세가율 < 현재 전세가율인 경우,<br>"
+"&nbsp- 매매흐름 '강한 상승' = 나쁨 (전세 보합, 매매 하락 우려)<br>"
+"&nbsp- 매매흐름 '약한 상승' = 나쁨 (전세 보합, 매매 하락 우려)<br>"
+"&nbsp- 매매흐름 '상승 전환' = 좋음 (전세가가 매매가를 밀어올리는 경우)<br>"
+"&nbsp- 매매흐름 '강한 하락' = 매우나쁨 (깡통 전세 현상 우려)<br>"
+"&nbsp- 매매흐름 '약한 하락' = 나쁨 (전세 보합, 매매 하락 우려)<br>"
+"&nbsp- 매매흐름 '하락 전환' = 나쁨 (전세 보합, 매매 하락 우려)<br><br>"

+"<li>이에 따른 점수의 계산방식은 전세가율 편차에 연동되어 점수가 산정되며, 이에 대한 알고리즘은 복잡성으로 인해 설명드리기 어렵습니다.<br><br>"
+"<li>전세가율 점수는 최대 100점, 최소 0점으로 배정되며, 종합 총점에서 ##%의 비중을 차지합니다.<br>"
+"</ul>"
+"<hr style='padding: 0px'>"
+"<li>자료출처: 한국부동산원<br>"
+"<li>데이터 알고리즘: 아파트랭크"

var biz_title_supply = "공급물량 점수는 어떻게 계산될까요?"
var biz_info_supply =
"<ul style='padding-left: 13px'>"
+"<li>공급물량 점수는 적정입주 물량인 '인구수 x 0.5%'를 50점 기준 시작합니다.<br><br>"

+"<li>공급물량은 당해 입주물량 + 분양물량으로 합산되며, 100%이상 공급 과다인 경우 0점, 100% 이상 공급 부족한 경우 100점으로 편차에 따라 차등점수가 부여됩니다.<br>"
+"이 때 100%가 초과되어도 100점으로 배정됩니다.<br><br>"

+"<li>공급물량 점수는 최종적으로 미분양 현황에 따라 5%~20% 감점이 적용됩니다.<br><br>"
+"<li>공급물량 점수는 종합 총점에서 ##%의 비중을 차지합니다.<br>"
+"</ul>"
+"<hr style='padding: 0px'>"
+"<li>자료출처: 아실, 부동산R114, 한국부동산원<br>"
+"<li>데이터 알고리즘: 아파트랭크"

var biz_title_non_sales = "미분양 점수는 어떻게 계산될까요?"
var biz_info_non_saels =
"<ul style='padding-left: 13px'>"
+"<li>미분양은 별도의 점수를 부여하지 않으며, 입주물량 점수에 감점요소로 사용됩니다.<br><br>"

+"<li>3개월 연속 미분양의 경우 -5%로부터 6개월 연속 미분양의 경우 -20%까지 -5%씩 감점 요율이 적용됩니다.<br><br>"
+"<li>단, 일부 데이터의 부족으로 구를 포함한 시의 경우, 구 전체의 미분양으로 계산됩니다. (예: 성남시 중원구 -> 성남시 전체 미분양 적용)<br><br>"
+"</ul>"
+"<hr style='padding: 0px'>"
+"<li>자료출처: 한국부동산원<br>"
+"<li>데이터 알고리즘: 아파트랭크"
