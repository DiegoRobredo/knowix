"use client";

import Link from "next/link";
import React, { FC } from "react";
import { TCourse } from "@/types/Course";

const CourseCard: FC<TCourse> = ({ id, title, description }) => {
  return (
    <Link className="aspect-square border-solid border-1 rounded-md p-4 w-full max-w-[150px]" key={id} href={`/course/${id}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default CourseCard;