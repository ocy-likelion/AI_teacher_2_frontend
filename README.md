<div align="center">

<!-- logo -->
<img src="https://github.com/user-attachments/assets/0cd4b453-6226-4766-bcef-42506ca75961" width="400"/>

### 🎯 일타 - 우리 아이 수학 설명 도우미

**멋쟁이 사자처럼 로켓단 12기 ✅**

[<img src="https://img.shields.io/badge/-readme.md-important?style=flat&logo=google-chrome&logoColor=white" />]()
[<img src="https://img.shields.io/badge/-tech blog-blue?style=flat&logo=google-chrome&logoColor=white" />]()
[<img src="https://img.shields.io/badge/release-v1.1.0-yellow?style=flat&logo=google-chrome&logoColor=white" />]()

<br/>

[<img src="https://img.shields.io/badge/프로젝트 기간-2025.06.30~2025.07.30-green?style=flat&logo=&logoColor=white" />]()

</div>

## 📝 프로젝트 소개

**"모르는 걸 묻는 아이, 설명 못해 답답한 부모님을 위한 AI 일타강사 앱"**

**일타**는 자녀가 수학 문제를 물어볼 때,  
**학부모가 마치 '일타강사'처럼 쉽게 설명할 수 있도록** 도와주는 AI 서비스입니다.

- 📷 **문제 사진 업로드** → 🤖 **AI가 핵심 개념 분석** → 🗣️ **부모용 설명 가이드 제공**
- 👪 부모가 **직접 설명할 수 있게** 돕는 국내 최초의 '부모 중심' 수학 학습 보조 도구

> “아이에게 이렇게 말해보세요: ‘12를 나눌 수 있는 수에는 어떤 게 있을까?’”

<br/>

✅ 모바일 웹 기반 1차 MVP 개발 완료
✅ UI 개선 완료
👉 **현재 모바일 웹 기반 2차 MVP 개발**

---

### 📱 화면 구성

|                                                  인트로                                                  |                                                  온보딩                                                  |                                                 메인 홈                                                  |                                               등록 전 편집                                               | 해설 보기                                                                                             |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/3a2e21a8-db76-4ec0-aac7-0f6e0d4c7ff5" width="200"/> | <img src="https://github.com/user-attachments/assets/cf16074d-3c61-4ab5-bda6-d639b4c3b34b" width="200"/> | <img src="https://github.com/user-attachments/assets/2df80e80-2adc-4e76-941d-d5558e23d390" width="200"/> | <img src="https://github.com/user-attachments/assets/158bf378-900f-4bd6-b4db-030bde3ab2fe" width="200"/> | <img src="https://user-images.githubusercontent.com/80824750/000000004-explanation.png" width="200"/> |

|                                           해설 기록(리스트)                                           |                                           해설 기록(그리드)                                           |
| :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/80824750/000000005-record-list.png" width="200"/> | <img src="https://user-images.githubusercontent.com/80824750/000000007-record-grid.png" width="200"/> |

> 사용자의 문제 해결 과정을 직관적으로 확인할 수 있도록 구성되어 있습니다.

---

## ⚙ 기술 스택

### Front-end

<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/HTMLCSS.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/TypeScript.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/React.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/ReactQuery.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Axios.png?raw=true" width="80">
<img src="https://github.com/user-attachments/assets/fc0553c9-f052-49df-bda6-aa05a3f6447c" width="80"/>
<img src="https://github.com/user-attachments/assets/e34365f7-a8d4-48d0-9583-6d3d026f4d41" width="80">
<img src="https://github.com/user-attachments/assets/598f2a56-3d63-4877-8079-7d3bdcd96a23" width="80"/>
</div>

### Infra

<div>
<img src="https://github.com/user-attachments/assets/6a511b9e-0b74-4197-97cd-e566763e1325" width="80"/>
<img src="https://github.com/user-attachments/assets/9efff7c5-be2b-4130-9b5d-6c04b2a2cf2c" width="80"/>
<img src="https://github.com/user-attachments/assets/6996202a-0d00-436b-abfa-5bd8c153ff00" width="80"/>
</div>

### Tools

<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Github.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Figma.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Discord.png?raw=true" width="80">
<img src="https://github.com/user-attachments/assets/6e13b122-9216-4862-87a4-f89f3ba78b34" width="80">
<img src="https://github.com/user-attachments/assets/f33c4b13-7697-40ce-8e63-178d81c9f68f" width="80">
</div>

---

## 🤔 기술적 이슈와 해결 과정

- 📌 **이미지 CORS 문제**  
  `React`에서 S3 이미지 업로드 후 프리뷰 시 CORS 이슈가 발생하여 pre-signed URL을 사용해 해결

- 📌 **이미지 업로드 시점에 따른 UI 동기화**  
  촬영 후 즉시 업로드가 되지 않고 사용자 확인 후 편집본을 업로드하도록 UX 개선

- 📌 **Svg 컴포넌트 IOS 에서의 Blur 문제**  
  Object Tag를 활용해 불러오도록 개선

---

## 💁‍♀️ 프로젝트 팀원

|                    Backend                    |                    Backend                    |                    Backend                     |                  Frontend                  |                    Frontend                    |
| :-------------------------------------------: | :-------------------------------------------: | :--------------------------------------------: | :----------------------------------------: | :--------------------------------------------: |
| ![](https://github.com/yeonju52.png?size=120) | ![](https://github.com/ysang989.png?size=120) | ![](https://github.com/suuny0321.png?size=120) | ![](https://github.com/EJ-99.png?size=120) | ![](https://github.com/Taiho1998.png?size=120) |
|     [이연주](https://github.com/yeonju52)     |     [박상연](https://github.com/ysang989)     |     [주선경](https://github.com/suuny0321)     |     [박은지](https://github.com/EJ-99)     |     [고태호](https://github.com/Taiho1998)     |
