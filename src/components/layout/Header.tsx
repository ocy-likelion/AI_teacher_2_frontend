export default function Header() {
  return (
    <header
      className="bg-background-light dark:bg-gray7 shadow-1 sticky top-0 flex items-center px-4 pb-2"
      style={{
        paddingTop: 'calc(8px + var(--safe-top))',
        minHeight: 'calc(var(--h-header) + var(--safe-top))',
      }}
    >
      <img src="/images/logo.svg" alt="로고" />
    </header>
  );
}
