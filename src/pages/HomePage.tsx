import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate('/onboarding');
        }}
      >
        to onboard
      </button>
    </>
  );
}
