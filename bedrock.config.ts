import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'ilta',
  brand: {
    displayName: '일타', // 화면에 노출될 앱의 한글 이름으로 바꿔주세요.
    primaryColor: '#ff7710', // 화면에 노출될 앱의 기본 색상으로 바꿔주세요.
    icon: '', // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요.
    bridgeColorMode: 'basic',
  },
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite --host',
      build: 'tsc -b && vite build',
    },
  },
  permissions: [],
  outdir: 'dist',
});
