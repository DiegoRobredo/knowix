"use client";

import { useState, useEffect } from "react";
import { TCertification } from "@/types/Certification";
import { getAllCertifications } from "@/certifications/interface/facade";

export function useCertificationList() {
  const [certifications, setCertifications] = useState<TCertification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response: TCertification[] = await getAllCertifications();
        setCertifications(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return { certifications, loading, error };
}
