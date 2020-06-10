import React from 'react';
import { useRouter } from "next/router";

export default function X() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div>
      你求求 /post id 是 {id}
    </div>
  );
}
