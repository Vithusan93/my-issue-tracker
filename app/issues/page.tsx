'use client';

import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Issuespage = () => {
  return <div><Button><Link href= 'issues/new'>New Issue</Link></Button></div>;
};

export default Issuespage;
