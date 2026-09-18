import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');


try {
  process.loadEnvFile();
} catch {
}

const app = express();
const angularApp = new AngularNodeAppEngine();


const CONTACT_FIELDS = ['fullName', 'email', 'phoneCode', 'phone', 'topic', 'message'] as const;


app.post('/api/contact', express.json(), async (req, res) => {
  const endpoint = process.env['GOOGLE_SHEETS_URL'];

  if (!endpoint) {
    console.error('Falta la variable de entorno GOOGLE_SHEETS_URL.');
    res.status(500).json({ ok: false, error: 'El formulario no está configurado.' });
    return;
  }

  const payload: Record<string, string> = {};
  for (const field of CONTACT_FIELDS) {
    const value: unknown = req.body?.[field];
    payload[field] = typeof value === 'string' ? value.trim() : '';
  }

  if (!payload['fullName'] || !payload['email'] || !payload['message']) {
    res.status(400).json({ ok: false, error: 'Faltan campos obligatorios.' });
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Apps Script respondió ${response.status}.`);
    }

    const result = (await response.json()) as { ok: boolean; error?: string };

    if (!result.ok) {
      throw new Error(result.error ?? 'Apps Script devolvió un error.');
    }

    res.json({ ok: true });
  } catch (error) {
    console.error('No se pudo guardar el contacto:', error);
    res.status(502).json({ ok: false, error: 'No se pudo guardar el mensaje.' });
  }
});


app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);


app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});


if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
