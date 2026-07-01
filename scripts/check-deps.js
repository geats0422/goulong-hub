import { readFileSync, existsSync } from ''fs'';
import { fileURLToPath } from ''url'';
import { dirname, resolve } from ''path'';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, ''..'');

const pkg = JSON.parse(readFileSync(resolve(root, ''package.json''), ''utf-8''));

const runtimeDeps = {
  ''vue-router'': ''^4'',
  ''pinia'': ''^2'',
  ''lucide-vue-next'': null,
  ''@vueuse/core'': null,
};

const devDeps = {
  ''tailwindcss'': ''^3'',
  ''postcss'': null,
  ''autoprefixer'': null,
  ''vitest'': null,
  ''@vitest/ui'': null,
  ''jsdom'': null,
  ''@vue/test-utils'': null,
};

function satisfiesRange(version, range) {
  if (!range) return true;
  const major = parseInt(version.split(''.'')[0], 10);
  if (range === ''^4'') return major === 4;
  if (range === ''^3'') return major === 3;
  if (range === ''^2'') return major === 2;
  return true;
}

function checkDeps(deps, source, label) {
  let ok = true;
  console.log(`\nChecking ${label}...`);
  for (const [name, range] of Object.entries(deps)) {
    const version = source[name];
    if (!version) {
      console.log(`  x ${name} missing`);
      ok = false;
      continue;
    }
    const clean = version.replace(/^[\^~>=<]+/, '''');
    if (!satisfiesRange(clean, range)) {
      console.log(`  x ${name}@${version} does not satisfy ${range}`);
      ok = false;
      continue;
    }
    console.log(`  + ${name}@${version}`);
  }
  return ok;
}

function checkFiles(files, label) {
  let ok = true;
  console.log(`\nChecking ${label}...`);
  for (const file of files) {
    const path = resolve(root, file);
    if (existsSync(path)) {
      console.log(`  + ${file} exists`);
    } else {
      console.log(`  x ${file} missing`);
      ok = false;
    }
  }
  return ok;
}

const runtimeOk = checkDeps(runtimeDeps, pkg.dependencies || {}, ''runtime dependencies'');
const devOk = checkDeps(devDeps, pkg.devDependencies || {}, ''dev dependencies'');
const filesOk = checkFiles([''tailwind.config.js'', ''postcss.config.js''], ''config files'');

const allOk = runtimeOk && devOk && filesOk;
console.log(`\n${allOk ? ''All checks passed'' : ''Some checks failed''}`);
process.exit(allOk ? 0 : 1);
