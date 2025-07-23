const OBJECTELEMENTS = [
  {
    image: 'orange_triangle.svg',
    style: 'left-[48%] top-[30vh] rotate-[10deg]',
  },
  { image: 'green.svg', style: 'left-[8%] top-[50vh] rotate-[-15deg]' },
  { image: 'blue.svg', style: 'left-[53%] top-[65vh] rotate-[5deg]' },
];

export default function OnboardingAnimation() {
  return (
    <div>
      {Array.from({ length: 3 }, (_, i) => i).map((value) => {
        return (
          <object
            data={`/images/characters/${OBJECTELEMENTS[value].image}`}
            type='image/svg+xml'
            style={{
              animationDuration: `${Math.floor(Math.random() * 5000 + 1000)}ms`,
            }}
            className={`absolute w-[20vh] h-[20vh] ${OBJECTELEMENTS[value].style} drop-shadow-[1rem_-1rem_0_rgba(255,128,45,0.3)] dark:drop-shadow-[1rem_-1rem_0_var(--color-primary2)] animate-bounce`}
          />
        );
      })}
    </div>
  );
}
