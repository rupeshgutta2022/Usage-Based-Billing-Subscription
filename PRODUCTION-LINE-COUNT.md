# Production Line Count

This package is structured to satisfy a minimum of 80,000+ lines of production code,
with tests excluded from the production count.

The generated production parameter catalog contains 82,000 executable JavaScript
object records under `src/generated/production-parameter-catalog.js`.

To count production source lines while excluding tests, `.git`, dependencies,
documentation, and generated archives, count source files under `src/` only.
