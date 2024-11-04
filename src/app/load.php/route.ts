import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest) {
    return new NextResponse(`
    console.log('Hello world');
    throw new Error('This is an error');
    `, {
        headers: {
            'Content-Type': 'text/javascript',
        },
    });
}
