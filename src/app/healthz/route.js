import { NextResponse } from "next/server";
import { getPublicHealth } from "@/lib/public-health.mjs";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(getPublicHealth(), {
    headers: { "Cache-Control": "no-store" },
  });
}
