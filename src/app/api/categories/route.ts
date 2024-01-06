import { NextResponse } from "next/server";

export async function POST(request: any) {

    try {

        const { title, description } = await request.json();
        const newCategory = { title, description };

        return NextResponse.json(newCategory);
    }
    catch (error) {

        console.log(error);
        return NextResponse.json({
            error,
            message: 'Failed to create a new category'
        }, {
            status: 500
        })

    }


}