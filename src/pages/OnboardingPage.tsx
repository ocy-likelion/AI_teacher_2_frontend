import { useNavigate } from 'react-router-dom';

export default function OnboardingPage() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        메인
      </button>
    </>
  );
}
