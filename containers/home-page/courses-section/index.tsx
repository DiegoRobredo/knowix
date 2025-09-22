import React, { FC } from "react";
import axios from "axios";
import CourseCard from "@/components/CourseCard";
import type { TCourse } from "@/types/Course";
import { getAll } from "@/libs/endpoints";

const CoursesSection: FC = async() => {

    const courses: TCourse[] = await axios.get("http://localhost:3000/api/courses/getAll").then(res => res.data.data);

    return (
      <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center gap-12 w-full">
        {courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </section>
    );
}

export default CoursesSection;