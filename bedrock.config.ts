import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'ilta',
  brand: {
    displayName: '일타',
    primaryColor: '#ff7710',
    icon: '', // TODO : 아이콘 이미지 주소로 바꾸기
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
