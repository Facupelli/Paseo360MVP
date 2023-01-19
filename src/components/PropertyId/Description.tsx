type Props = {
  description?: string;
};

export default function Description({ description }: Props) {
  return (
    <section className="py-4">
      <h3 className="pb-2 text-xl font-semibold">Descripción:</h3>
      <p className="text-gray-200">{description}</p>
    </section>
  );
}
