import { NextResponse } from "next/server";

export async function POST(request: any) {

    try {

        const { title, location, type, description } = await request.json();
        const warehouse = { title, location, type, description };

        return NextResponse.json(warehouse);
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