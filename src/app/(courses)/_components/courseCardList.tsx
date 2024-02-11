import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCard } from "./courseCard";
import { API_URL } from "@/configs/global";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    cache: "no-store",
    next: { revalidate: 60 * 60 * 24 },
  });
  return res.json();
}

type CourseCardListProps = { courses: CourseSummary[] };
export const CourseCardList: React.FC<CourseCardListProps> = async ({
  courses,
}: CourseCardListProps) => {
  const newestBlogPostsData = await getNewestCourses(4);

  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestBlogPostsData.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
