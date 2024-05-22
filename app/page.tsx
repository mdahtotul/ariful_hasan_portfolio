import ThemeSwitch from "@/components/common/ThemeComp/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-red dark:text-white">
      Hello there, ok? no? what do you know?
      <ThemeSwitch />
    </main>
  );
}
