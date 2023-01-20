type Props = {
  children: React.ReactNode;
  title: string;
};

export default function InfoSection({ children, title }: Props) {
  return (
    <section className="rounded-sm bg-gray-700 p-4 shadow-sm">
      <h3 className="pb-2 text-xl font-semibold">{title}:</h3>
      {children}
    </section>
  );
}
