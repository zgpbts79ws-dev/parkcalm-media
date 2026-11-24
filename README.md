# parkcalm-media

Public image queue and posting kit for ParkCalm's Instagram (@parkcalm). Instagram's API only publishes images it can download from a public URL, so finished posts live here.

**This repo is public.** Only finished marketing images, their JSON and the kit go here. No screenshots with anyone's personal details, nothing private.

## Layout

```
parkcalm/
  YYYY-MM-DD-a.jpg    2:00 PM Madrid slot (screenshot explainer)
  YYYY-MM-DD-a.json
  YYYY-MM-DD-b.jpg    7:00 PM Madrid slot (parking tip)
  YYYY-MM-DD-b.json
kit/                  how posts are made: PLAYBOOK.md, style.css, render.mjs, examples/, shots/, post-log.md
```

Each `.json`:

```json
{
  "account": "parkcalm",
  "slot": "2026-11-25-a",
  "publish_at": "2026-11-25T14:00:00+01:00",
  "image": "parkcalm/2026-11-25-a.jpg",
  "caption": "Exact caption as it should appear on Instagram",
  "alt_text": "One sentence describing the image",
  "type": "explainer",
  "headline": "Headline on the image"
}
```

## Who does what

- **Post maker** (scheduled task, every 3 days, on Lew's PC in `Documents\GitHub\parkcalm-media`): writes the posts from `kit/`, renders them to JPEG and pushes them to `parkcalm/`.
- **Publisher** (scheduled task, 14:07 and 19:07 Madrid, in the cloud): publishes the slot's post through the Windsor.ai Instagram connector to @parkcalm and records it in the project doc `claude/parkcalm-instagram-log.md`.

To stop a post from going out, delete its `.json` file here before its slot.
