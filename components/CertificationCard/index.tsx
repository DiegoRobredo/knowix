"use client";

import Link from "next/link";
import React, { FC } from "react";
import { TCertification } from "@/types/Certification";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CertificationCard: FC<TCertification> = ({ id, title, description }) => {
  return (
    <Link key={id} href={`/certification/${id}`}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {description}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Start an exam</Button>
        </CardActions> */}
      </Card>
    </Link>
  );
};

export default CertificationCard;
