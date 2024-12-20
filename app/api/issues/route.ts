import { NextRequest, NextResponse} from "next/server";
import prismaClient from '@prisma/client';
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../validationSchema";

//This is for the body of the request
export async function POST (request: NextRequest){
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body); //Validate data
    if (!validation.success)
        return NextResponse.json(validation.error.format(), {status: 400}); //400 is bad request
    
    const newIssue = await prisma.issue.create({
        data:{title: body.title, description: body.description}
    });

    return NextResponse.json(newIssue, {status: 201}) //201 means object was created.


        //If system reached this line the if-statement is false and request is valid. 
    } 
    //NOTE: If the request is valid then store the issue in the database.
    //      You have to import Prisma client to do this

