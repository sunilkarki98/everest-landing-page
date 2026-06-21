import { detailedCourses } from "@/data/courses";
import { CourseDetailClient } from "./CourseDetailClient";

export async function generateStaticParams() {
  return detailedCourses.map((course) => ({
    slug: course.id,
  }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CourseDetailClient slug={slug} />;
}
