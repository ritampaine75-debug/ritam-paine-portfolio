#!/usr/bin/env python3
"""
Generate static brand + social (OG) images for the Ritam Paine portfolio.

Outputs (relative to the repository root):
  public/icon-192.png
  public/icon-512.png
  public/apple-touch-icon.png
  public/og-image.png
  public/og-images/<project-slug>.png

Fonts: tries Space Grotesk / Manrope / Inter variable TTFs on disk first
(see FONT_PATHS), then falls back to DejaVu Sans (bundled with most OSes).

Usage:  python3 scripts/generate-images.py
"""
import math
import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
OG_DIR = os.path.join(PUBLIC, "og-images")

FONT_PATHS = [
    "/tmp/fonts/SpaceGrotesk.ttf",
    "/tmp/fonts/Manrope.ttf",
    "/tmp/fonts/Inter.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]

# Project OG image content. Keep in sync with src/data/projects.js summaries.
OG_PROJECTS = [
    {
        "file": "ritamchat",
        "name": "RitamChat",
        "tagline": "WhatsApp-inspired real-time messaging web app — Firebase Realtime Database, presence, media workflows and PWA support. (in development)",
    },
    {
        "file": "web-tools-hub",
        "name": "Web Tools Hub",
        "tagline": "25 free browser tools in one fast, mobile-first, offline-ready PWA. Published and live.",
    },
    {
        "file": "tic-tac-toe-multiplayer",
        "name": "Tic Tac Toe Multiplayer",
        "tagline": "Online multiplayer game experiment around a Firebase backend — AI opponents, ranking and leaderboard concepts explored.",
    },
    {
        "file": "otp-gmail-verification",
        "name": "Gmail OTP Verification",
        "tagline": "React + Firebase OTP email-verification experiment with expiry, attempt limits, resend cooldowns and GitHub Actions.",
    },
    {
        "file": "ai-chat-applications",
        "name": "AI Chat Applications",
        "tagline": "A series of live AI chat experiments wiring language models into mobile-first web apps.",
    },
    {
        "file": "shopverse-ecommerce",
        "name": "ShopVerse E-Commerce",
        "tagline": "Premium e-commerce interface experiment built with HTML, CSS, JavaScript and Firebase.",
    },
    {
        "file": "ai-life-planner",
        "name": "AI Life Planner",
        "tagline": "Experimental AI-guided life-planning concept — structured recommendations in Bengali and English.",
    },
    {
        "file": "sayan",
        "name": "Sayan",
        "tagline": "Digital wellbeing concept: maximize life, minimize screen time. Usage insights in a calm mobile UI.",
    },
    {
        "file": "smart-billing-inventory",
        "name": "Smart Billing & Inventory",
        "tagline": "Business-management concept: inventory, barcode and QR scanning, billing, invoices and Indian-currency workflows.",
    },
]

# ---------------------------------------------------------------- font cache
_fonts = {}


def font(size, weight=400):
    key = (round(size), weight)
    if key in _fonts:
        return _fonts[key]
    path = None
    for p in FONT_PATHS:
        if os.path.exists(p):
            path = p
            break
    f = ImageFont.truetype(path, int(size))
    try:
        if "DejaVu" not in path:
            axes = [a.get("name") for a in f.get_variation_axes()]
            if b"wght" in axes or "wght" in axes:
                f.set_variation_by_axes([weight])
    except Exception:
        pass
    _fonts[key] = f
    return f


# ---------------------------------------------------------------- palette
def lerp(c1, c2, t):
    return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))


VIOLET = (139, 92, 246)
INDIGO = (99, 102, 241)
CYAN = (34, 211, 238)
BG_TOP = (9, 11, 18)
BG_BOT = (13, 17, 28)
INK = (247, 249, 255)
SUB = (174, 182, 201)
MUTED = (126, 135, 155)
GIT = (103, 232, 249)


def diagonal_gradient(w, h, a, b, c):
    """Smooth gradient from top-left (a) through mid (b) to bottom-right (c)."""
    base = Image.new("RGB", (2, 2))
    base.putpixel((0, 0), a)
    base.putpixel((1, 0), lerp(a, b, 0.55))
    base.putpixel((0, 1), lerp(a, b, 0.45))
    base.putpixel((1, 1), c)
    return base.resize((w, h), Image.BILINEAR)


def radial_glow(size, center, radius, color, alpha):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse(
        [
            center[0] - radius,
            center[1] - radius,
            center[0] + radius,
            center[1] + radius,
        ],
        fill=color + (alpha,),
    )
    layer = layer.filter(ImageFilter.GaussianBlur(radius / 2.2))
    return layer


def spaced(draw, xy, text, font, fill, tracking):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking
    return x


def wrap(draw, text, font, maxw):
    words = text.split(" ")
    lines = []
    cur = ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= maxw:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def brand_background(w, h):
    img = diagonal_gradient(w, h, BG_TOP, (11, 14, 24), (17, 14, 30)).convert("RGBA")
    # soft violet glow top-right, faint cyan bottom-left
    img.alpha_composite(radial_glow((w, h), (int(w * 0.92), int(h * 0.06)), int(w * 0.55), VIOLET, 46))
    img.alpha_composite(radial_glow((w, h), (int(w * 0.06), int(h * 0.95)), int(w * 0.5), CYAN, 26))
    # subtle dot grid
    d = ImageDraw.Draw(img)
    for gx in range(90, w, 90):
        d.ellipse([gx, 26, gx + 2, 28], fill=(255, 255, 255, 14))
    for gy in range(60, h, 90):
        d.ellipse([w - 40, gy, w - 38, gy + 2], fill=(255, 255, 255, 12))
    return img


def mono_chip(draw, xy, size, label):
    """Gradient rounded square with a white letter (used as the avatar)."""
    s = size
    x, y = xy
    chip = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    cd = ImageDraw.Draw(chip)
    grad = diagonal_gradient(s, s, VIOLET, INDIGO, CYAN).convert("RGBA")
    mask = Image.new("L", (s, s), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, s - 1, s - 1], radius=int(s * 0.3), fill=255)
    chip.paste(grad, (0, 0), mask)
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    img.paste(chip, (x, y), chip)
    f = font(int(s * 0.55), 700)
    bbox = f.getbbox(label)
    tw = (bbox[2] - bbox[0]) or 1
    imgd = ImageDraw.Draw(img)
    tx = x + (s - tw) / 2
    imgd.text((tx, y + s * 0.12), label, font=f, fill=(255, 255, 255))
    return img


def draw_main_og():
    W, H = 1200, 630
    img = brand_background(W, H)
    d = ImageDraw.Draw(img)

    # top-right chip + brand line
    chip = mono_chip(d, (76, 78), 64, "R")
    img.alpha_composite(chip)
    spaced(d, (162, 92), "RITAM PAINE  ·  WEB DEVELOPER", font(27, 600), GIT, 4)
    spaced(d, (162, 126), "PORTFOLIO", font(27, 600), MUTED, 10)

    # headline
    d.text((76, 196), "Ritam Paine", font=font(96, 700), fill=INK)
    d.text((76, 322), "Web Developer & Digital Product Builder", font=font(42, 600), fill=SUB)
    # description wrapped
    desc = (
        "Building modern web applications, AI-powered tools, real-time systems, "
        "Firebase projects and experimental digital products."
    )
    f = font(30, 400)
    lines = wrap(d, desc, f, W - 152)
    yy = 420
    for ln in lines[:3]:
        d.text((76, yy), ln, font=f, fill=MUTED)
        yy += 44

    # accent hairline
    hair = diagonal_gradient(W - 152, 4, VIOLET, INDIGO, CYAN)
    img.paste(hair, (76, 566))

    # footer
    spaced(d, (76, 592), "GITHUB.COM/RITAMPAINE75-DEBUG", font(22, 600), INK, 3)
    right_label = "WEB DEVELOPER · DIGITAL PRODUCT BUILDER"
    tw = d.textlength(right_label, font=font(22, 500))
    spaced(d, (W - 76 - tw, 592), right_label, font(22, 500), MUTED, 1)

    img.convert("RGB").save(os.path.join(PUBLIC, "og-image.png"), quality=92)


def draw_project_og(item):
    W, H = 1200, 630
    img = brand_background(W, H)
    d = ImageDraw.Draw(img)

    chip = mono_chip(d, (76, 74), 58, "R")
    img.alpha_composite(chip)
    spaced(d, (154, 86), "RITAM PAINE  ·  WEB DEVELOPER", font(25, 600), GIT, 3)
    d.text((76, 168), "Project", font=font(30, 600), fill=MUTED)

    name = item["name"]
    fname = font(84, 700) if len(name) < 22 else font(64, 700)
    d.text((76, 208), name, font=fname, fill=INK)

    f = font(30, 400)
    lines = wrap(d, item["tagline"], f, W - 152)
    yy = 360
    for ln in lines[:4]:
        d.text((76, yy), ln, font=f, fill=SUB)
        yy += 44

    hair = diagonal_gradient(W - 152, 4, VIOLET, INDIGO, CYAN)
    img.paste(hair, (76, yy + 16))

    spaced(d, (76, 596), "GITHUB.COM/RITAMPAINE75-DEBUG", font(21, 600), INK, 3)
    img.convert("RGB").save(os.path.join(OG_DIR, f"{item['file']}.png"), quality=92)


def draw_icon(size, out):
    W = size
    img = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    grad = diagonal_gradient(W, W, VIOLET, INDIGO, CYAN).convert("RGBA")
    mask = Image.new("L", (W, W), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, W - 1, W - 1], radius=int(W * 0.235), fill=255)
    img.paste(grad, (0, 0), mask)
    inner = Image.new("L", (W, W), 0)
    ImageDraw.Draw(inner).rounded_rectangle([int(W * 0.015), int(W * 0.015), W - int(W * 0.015), W - int(W * 0.015)], radius=int(W * 0.22), fill=255)
    ring = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    ring.paste((255, 255, 255, 40), (0, 0), inner)
    img.alpha_composite(ring)
    d = ImageDraw.Draw(img)
    f = font(int(W * 0.5), 700)
    label = "R"
    bbox = f.getbbox(label)
    tw = bbox[2] - bbox[0]
    d.text(((W - tw) / 2, int(W * 0.13)), label, font=f, fill=(255, 255, 255))
    img.convert("RGB").save(out)


def main():
    os.makedirs(OG_DIR, exist_ok=True)
    draw_icon(192, os.path.join(PUBLIC, "icon-192.png"))
    draw_icon(512, os.path.join(PUBLIC, "icon-512.png"))
    draw_icon(180, os.path.join(PUBLIC, "apple-touch-icon.png"))
    draw_main_og()
    for item in OG_PROJECTS:
        draw_project_og(item)
    print("Generated icons, apple-touch-icon, og-image.png and", len(OG_PROJECTS), "project OG images.")


if __name__ == "__main__":
    main()
