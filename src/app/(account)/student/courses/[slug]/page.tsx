export default async function CourseDetails({
  params,
}: {
  params: { slug: String };
}) {
  const { slug } = params;

  return (
    <div className="text-3xl font-bold text-red-600 flex items-center justify-center flex-1">
      {slug}
    </div>
  );
}
