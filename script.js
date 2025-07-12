// 웹페이지의 모든 DOM 콘텐츠가 로드된 후 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', function () {

    // 클래스가 'toggle-btn'인 모든 버튼 요소를 선택합니다.
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    // 선택된 각 버튼에 대해 클릭 이벤트를 설정합니다.
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            // 클릭된 버튼 바로 다음에 오는 형제 요소를 찾습니다. 
            // 이 요소가 숨겨지거나 보여질 콘텐츠(.toggle-content)입니다.
            const content = this.nextElementSibling;

            // 콘텐츠의 현재 표시 상태를 확인합니다.
            if (content.style.display === 'block') {
                // 콘텐츠가 보여지고 있다면 숨깁니다.
                content.style.display = 'none';
                // 버튼의 텍스트를 원래대로 변경합니다.
                this.textContent = this.textContent.replace('닫기', '보기');
            } else {
                // 콘텐츠가 숨겨져 있다면 보여줍니다.
                content.style.display = 'block';
                // 버튼의 텍스트를 '닫기'로 변경하여 사용자에게 상태를 알려줍니다.
                this.textContent = this.textContent.replace('보기', '닫기');
            }
        });
    });

});