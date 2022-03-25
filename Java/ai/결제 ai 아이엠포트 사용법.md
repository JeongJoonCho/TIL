## 결제 ai 아이엠포트 사용법

```jsp
<script type="text/javascript"
	src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
-------------------------------------------------------------------

<script>
	function requestPay() {
		IMP.init("iamport");
		IMP.request_pay({
			pg : "html5_inicis", //이니시스 웹표준 결제창
			pay_method : "card", //결제방법
			merchant_uid : "ORD20211216-0000001", //주문번호
			name : "상품명", //상품명
			amount : "가격", //가격
			buyer_email : "gildong@gmail.com", //이메일
			buyer_name : "홍길동", //이름
			buyer_tel : "010-1234-5678", //연락처
			buyer_addr : "서울특별시 강남구 신사동", //주소
			buyer_postcode : "00001" //상품코드
		}, function(rsp) {
			if (rsp.success) {
				var msg = '결제가 완료되었습니다.';
			} else {
				var msg = '결제에 실패하였습니다.';
			}
		});
	}
</script>

--------------------------------------------------------------------

<button onclick="requestPay()">결 제</button>
```

