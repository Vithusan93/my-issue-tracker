import { NextRequest, NextResponse } from "next/server";
import { issuSchema } from "../validationSchemas";
import prisma from "@/prisma/client";
import { error } from "console";

interface Props{
    params:{params:{id: string}}
}

export async function PATCH(
    request:NextRequest,
    {params} : {params:{id:string}} ){
        const body =await request.json();
    const validation = issuSchema.safeParse(body);
    if (! validation.success)
        return NextResponse.json(validation.error.format(),{status:400});
    const issue = await prisma.issue.findUnique({
        where:{id: parseInt(params.id)}
    })
    if(!issue)
        return NextResponse.json({error:'Invalid issue'}, {status: 404});

    const updatesIssue = await prisma.issue.update({
        where:{id: issue.id},
        data:{
            title:body.title,
            description:body.description,
        }
    });
    return NextResponse.json(updatesIssue);
    
    }
