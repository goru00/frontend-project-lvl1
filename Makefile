# Makefile
install: 
	npm install

brain-games:
	node bin/games/brain-games.js

brain-even:
	node bin/games/brain-even.js

brain-calc:
	node bin/games/brain-calc.js

brain-progression:
	none bin/games/brain-progression.js

brain-gcd:
	node bin/games/brain-gcd.js

brain-prime:
	node bin/games/brain-prime.js

index: 
	node src/index.js

cls:
	node src/cls.js

unlink:
	npm unlink .

link: # для себя
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix: # для себя
	npx eslint . --fix