# Contributing

Thank you for improving PromptCraft Studio.

## Development Setup

```bash
node server.js
```

Open `http://localhost:4173`.

Run validation:

```bash
npm test
```

## Contribution Scope

Good first contributions:

- Add high-quality prompt templates
- Improve prompt scoring rules
- Add import or export formats
- Improve mobile layout
- Add deployment examples
- Translate docs

Larger contributions:

- Prompt version history
- Team sharing
- Prompt test cases
- Optional backend adapters
- Browser extension

## Code Style

- Keep the app dependency-light.
- Prefer plain HTML, CSS, and JavaScript for the core demo.
- Keep UI text short and useful.
- Add tests to `scripts/validate.js` when changing project structure.

## Pull Request Checklist

- The app opens locally with `node server.js`.
- `npm test` passes.
- New user-facing features include README updates.
- New templates include clear categories and tags.
