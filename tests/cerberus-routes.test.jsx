import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import CerberusProductPage from "../src/app/products/cerberus/page";
import CerberusStandalonePage from "../src/app/cerberus/page";

const forbidden = ["private key", "seed phrase", "cerberus pin", "wallet balance", "claw royale api key"];

describe("CERBERUS public routes", () => {
  for (const [route, Page] of [["/products/cerberus", CerberusProductPage], ["/cerberus", CerberusStandalonePage]]) {
    it(`renders ${route} from the shared public model`, () => {
      const html = renderToStaticMarkup(<Page />);
      expect(html).toContain("CERBERUS");
      expect(html).toContain("local-first deterministic autonomous operations platform");
      expect(html).toContain("never connects browsers to the private CERBERUS runtime");
      for (const phrase of forbidden) expect(html.toLowerCase()).not.toContain(phrase);
    });
  }
});
