# avroy.tech

Site www.avroy.tech, généré avec [Hugo](https://gohugo.io) (testé avec 0.148.2 extended) et publié par GitHub Pages.

- `hugo server` : prévisualisation sur http://localhost:1313
- `hugo` : construit le site dans `dist/`
- Tout envoi sur `main` déclenche `.github/workflows/deploy.yml`, qui construit et publie le site.

Organisation :

- `hugo.toml` : réglages (menu, courriel, liens sociaux, `formEndpoint` des formulaires) ;
- `content/` : articles du blog (`content/blog/*.md`) et pages (`content/*.html`) ;
- `layouts/` : gabarits et shortcodes (`form`, `social`, `services`, `team`) ;
- `static/` : CSS, polices, images, `robots.txt`, `CNAME`.

Pour publier un nouvel article : créer `content/blog/<slug>.md` avec le même front matter que les autres (`title`, `date`, `author`, `description`, `image`), l'image de couverture dans `static/assets/img/blog/`.
