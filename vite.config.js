import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      origin: '*', // 모든 도메인 허용 (필요에 따라 조정 가능)
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 허용할 HTTP 메서드 정의
    },
    open: true, // 개발 서버가 실행되면 브라우저 자동 열기
    port: 5173, // 기본 포트 (원하면 변경 가능)
  },
});
