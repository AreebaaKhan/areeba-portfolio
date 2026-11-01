from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

FOLDERS = [
    "public/images/profile",
    "public/images/projects/banking-advisor",
    "public/images/projects/qabil",
    "public/images/projects/vulnerability-dashboard",
    "public/images/projects/weather-monitoring",
    "public/images/projects/plant-disease",
    "public/images/projects/n-queens",
    "public/images/achievements/suparco",
    "public/images/achievements/skkillo",
    "public/images/logos",
    "public/videos/previews",
    "public/resume",
    "src/app/about",
    "src/app/projects/[slug]",
    "src/app/experience",
    "src/app/global-classroom",
    "src/app/achievements",
    "src/app/certifications",
    "src/components/layout",
    "src/components/ui",
    "src/components/home",
    "src/components/projects",
    "src/components/experience",
    "src/components/certifications",
    "src/data",
    "src/lib",
]

FILES = [
    "src/app/about/page.js",
    "src/app/projects/page.js",
    "src/app/projects/[slug]/page.js",
    "src/app/experience/page.js",
    "src/app/global-classroom/page.js",
    "src/app/achievements/page.js",
    "src/app/certifications/page.js",
    "src/components/layout/Navbar.jsx",
    "src/components/layout/Footer.jsx",
    "src/components/layout/PageHeader.jsx",
    "src/components/ui/Button.jsx",
    "src/components/ui/Badge.jsx",
    "src/components/ui/Card.jsx",
    "src/components/ui/Reveal.jsx",
    "src/components/ui/DriveVideo.jsx",
    "src/components/home/Hero.jsx",
    "src/components/home/FeaturedProjects.jsx",
    "src/components/home/HighlightsStrip.jsx",
    "src/components/projects/ProjectCard.jsx",
    "src/components/projects/ProjectFilter.jsx",
    "src/components/projects/Gallery.jsx",
    "src/components/experience/Timeline.jsx",
    "src/components/certifications/CertCard.jsx",
    "src/data/site.js",
    "src/data/projects.js",
    "src/data/experience.js",
    "src/data/teaching.js",
    "src/data/achievements.js",
    "src/data/certifications.js",
    "src/data/skills.js",
    "src/lib/utils.js",
]

PLACEHOLDER_SVG = """<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <rect width="1200" height="675" fill="#ffffff"/>
</svg>
"""

created_folders = 0
created_files = 0
skipped = 0

for folder in FOLDERS:
    path = ROOT / folder
    if not path.exists():
        path.mkdir(parents=True)
        created_folders += 1
    if folder.startswith("public/"):
        keep = path / ".gitkeep"
        if not keep.exists():
            keep.touch()

for file in FILES:
    path = ROOT / file
    if path.exists():
        skipped += 1
    else:
        path.touch()
        created_files += 1

placeholder = ROOT / "public/images/placeholder.svg"
if not placeholder.exists():
    placeholder.write_text(PLACEHOLDER_SVG, encoding="utf-8")
    created_files += 1

print(f"Folders created: {created_folders}")
print(f"Files created: {created_files}")
print(f"Files skipped (already existed): {skipped}")