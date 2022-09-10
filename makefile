dev-env:
	 cp tools/tsconfig.json tsconfig.json
	 cp tools/vite.config.ts vite.config.ts
	 sed -i '/baseUrl/d' tsconfig.json
	 sed -i 's/\.\.\/src/\.\/src/g' vite.config.ts
