import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, organization, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // TODO: Integrate with your preferred email service or CRM
    // Options include:
    // - Send email notification with Resend
    // - Create ticket in support system
    // - Store in database
    // - Add to CRM like HubSpot

    // For now, we log the contact (replace with actual integration)
    console.log("[v0] Contact form submission:", { name, email, organization, message })

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
