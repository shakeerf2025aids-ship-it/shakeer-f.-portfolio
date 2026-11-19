import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "@/lib/contact-form";

const valid = { name: "Asha", email: "asha@example.com", subject: "Internship", message: "Hello Shakeer, let's talk." };

describe("contact form", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a message shorter than 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "hi" }).success).toBe(false);
  });

  it("addresses the email to Shakeer with the subject filled in", () => {
    const url = buildMailto("shakeer.f2025aids@sece.ac.in", valid);
    expect(url.startsWith("mailto:shakeer.f2025aids@sece.ac.in?subject=Internship&body=")).toBe(true);
  });
});
