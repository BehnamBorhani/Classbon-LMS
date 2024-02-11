import { Badge } from "@/app/_components/badge";
import { IconArrowLeftFill, IconClock } from "@/app/_components/icons/icons";
import { Price } from "@/app/_components/price/price";
import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = CourseSummary & {};

export const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          width={550}
          height={327}
          alt={title}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-2 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between mt-3">
          <Badge variant="warning">
            <IconClock width={16} height={16} />
            {duration}
          </Badge>
          <Price price={basePrice} size="small" />
        </div>
      </div>
      <Link
        href={`/courses/${slug}`}
        className="card-footer justify-center animated-icon"
      >
        مشاهده جزییات دوره
        <IconArrowLeftFill fill="currentColor" />
      </Link>
    </div>
  );
};
