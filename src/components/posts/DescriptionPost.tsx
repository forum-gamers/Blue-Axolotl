"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function DescriptionPost({
  description,
}: {
  description: string;
}) {
  const [truncate, setTruncate] = useState(false);

  useEffect(() => {
    if (description.length > 60) setTruncate(true);
  }, [description]);

  const seeMoreAction = () => setTruncate(false);
  return (
    <>
      <p className={`${truncate ? "truncate" : ""} text-xs`}>{description}</p>
      {truncate && (
        <Button
          variant="ghost"
          className="text-black p-0 h-4"
          onClick={seeMoreAction}
        >
          See more...
        </Button>
      )}
    </>
  );
}
