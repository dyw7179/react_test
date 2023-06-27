import React from 'react';
import '../css/navigation.css'; // Navigation 컴포넌트 전용 CSS 파일 임포트

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">예약하기</a></li>
        <li><a href="#">관광</a></li>
        <li><a href="#">...</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
