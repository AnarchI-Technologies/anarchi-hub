import { describe, expect, it } from "vitest";
import { getPublicHealth } from "../src/lib/public-health.mjs";

describe("public health contract", () => {
  it("returns only the approved fields", () => {
    const health = getPublicHealth({ ANARCHI_BUILD_ID: "abc123" });
    expect(health).toEqual({ ok: true, service: "anarchi-hub", version: "abc123" });
    expect(Object.keys(health).sort()).toEqual(["ok", "service", "version"]);
  });

  it("does not copy secrets or unsafe build labels", () => {
    const secret = "never-include-this-value";
    const health = getPublicHealth({ ANARCHI_BUILD_ID: `bad/${secret}`, CERBERUS_PIN: secret, PRIVATE_KEY: secret });
    expect(health.version).toBe("unknown");
    expect(JSON.stringify(health)).not.toContain(secret);
  });
});
