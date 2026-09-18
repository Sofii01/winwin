import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const EXPOSED = ['SHEETS_URL'];


try {
  process.loadEnvFile();
} catch {
  // Sin .env: se usan las variables de entorno tal cual.
}

const defines = EXPOSED.map((name) => {
  const value = process.env[name] ?? '';
  if (!value) {
    console.warn(`[ng-with-env] Aviso: ${name} está vacía. Revisá el .env.`);
  }

  return `--define=__${name}__=${JSON.stringify(value)}`;
});

const ngBin = fileURLToPath(new URL('../node_modules/@angular/cli/bin/ng.js', import.meta.url));

const child = spawn(process.execPath, [ngBin, ...process.argv.slice(2), ...defines], {
  stdio: 'inherit',
});

child.on('exit', (code) => process.exit(code ?? 1));
