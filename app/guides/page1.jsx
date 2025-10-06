// File: /app/guides/page.jsx

import GuidesPageClient from "./GuidesPage"; // This imports the client component

/**
 * Server Component: Acts as a shell to render the client component.
 * All data fetching is now handled on the client side.
 */
export default function GuidesPage() {
  // No data fetching happens here anymore.
  // We just render the client component which will fetch its own data.
  return <GuidesPageClient />;
}
