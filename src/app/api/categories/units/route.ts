import { NextResponse } from "next/server";

export async function POST(request: any) {

    try {

        const { title, abbreviation } = await request.json();
        const unit = { title, abbreviation };

        return NextResponse.json(unit);
    }
    catch (error) {

        console.log(error);
        return NextResponse.json({
            error,
            message: 'Failed to create a new Unit'
        }, {
            status: 500
        })

    }


}