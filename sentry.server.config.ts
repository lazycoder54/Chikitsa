// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://bb79b1c8e05072466a8dbebd2d01f10c@o4507935143624704.ingest.de.sentry.io/4507935148671056",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
