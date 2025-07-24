const OBJECTELEMENTS = [
  {
    image: 'orange_triangle.svg',
    style: 'left-[60%] top-[-10%] rotate-[10deg]',
  },
  { image: 'green.svg', style: 'left-[10%] top-[30%] rotate-[-15deg]' },
  { image: 'blue.svg', style: 'left-[53%] top-[60%] rotate-[5deg]' },
];

export default function OnboardingAnimation() {
  return (
    <>
      {Array.from({ length: 3 }, (_, i) => i).map((value) => {
        return (
          <object
            key={value}
            data={`/images/characters/${OBJECTELEMENTS[value].image}`}
            type='image/svg+xml'
            className={`absolute size-[15vh] ${OBJECTELEMENTS[value].style} aspect-square drop-shadow-[1rem_-1rem_0_rgba(255,128,45,0.3)] dark:drop-shadow-[1rem_-1rem_0_var(--color-primary2)] animate-up-and-down`}
          />
        );
      })}
    </>
  );
}
