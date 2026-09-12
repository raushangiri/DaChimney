import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return Response.json(
      {
        success: true,
        message: "Booking notification received. Wire this endpoint to your email/SMS provider.",
        received: body,
      },
      { status: 200 }
    );
  } catch {
    return Response.json({ success: false, message: "Invalid payload" }, { status: 400 });
  }
}