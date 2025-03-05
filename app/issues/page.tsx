
import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import prisma from '@/prisma/client'

const Issuespage = async () => {
 const issues = await prisma.issue.findMany();
  return <div><Button><Link href= 'issues/new'>New Issue</Link></Button></div>;
};

export default Issuespage;
