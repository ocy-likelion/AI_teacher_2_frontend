export default function OnboardingAnimation() {
  const durationA = `${Math.floor(Math.random() * 5000 + 1000)}ms`;
  const durationB = `${Math.floor(Math.random() * 5000 + 1000)}ms`;
  const durationC = `${Math.floor(Math.random() * 5000 + 1000)}ms`;
  return (
    <div>
      <object
        data='/images/characters/orange_triangle.svg'
        type='image/svg+xml'
        style={{ animationDuration: durationA }}
        className='absolute w-[20vh] h-[20vh] left-[48%] top-[30vh] rotate-[10deg] drop-shadow-[1rem_-1rem_0_rgba(255,128,45,0.3)] dark:drop-shadow-[1rem_-1rem_0_var(--color-primary2)] animate-bounce'
      />
      <object
        data='/images/characters/green.svg'
        type='image/svg+xml'
        style={{ animationDuration: durationB }}
        className='absolute w-[20vh] h-[20vh] left-[8%] top-[50vh] rotate-[-15deg] drop-shadow-[1rem_-1rem_0_rgba(255,128,45,0.3)] dark:drop-shadow-[1rem_-1rem_0_var(--color-primary2)] animate-bounce'
      />
      <object
        data='/images/characters/blue.svg'
        type='image/svg+xml'
        style={{ animationDuration: durationC }}
        className='absolute w-[20vh] h-[20vh] left-[53%] top-[65vh] rotate-[5deg] drop-shadow-[1rem_-1rem_0_rgba(255,128,45,0.3)] dark:drop-shadow-[1rem_-1rem_0_var(--color-primary2)] animate-bounce'
      />
    </div>
  );
}
