from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
img = Image.new("RGB", (W, H), "#22223b")
d = ImageDraw.Draw(img)

def load(names, size):
    for n in names:
        try:
            return ImageFont.truetype(n, size)
        except OSError:
            continue
    return ImageFont.load_default()

bold = ["C:/Windows/Fonts/segoeuib.ttf", "C:/Windows/Fonts/arialbd.ttf"]
reg = ["C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"]

d.rectangle([40, 40, W - 40, H - 40], outline="#4a4e69", width=2)
d.rectangle([100, 170, 108, 440], fill="#c9ada7")

d.text((140, 160), "Areeba Khan", font=load(bold, 96), fill="#f2e9e4")
d.text((140, 290), "Computer Systems Engineer", font=load(reg, 46), fill="#c9ada7")
d.text((140, 360), "Backend  |  AI", font=load(reg, 38), fill="#a3949f")
d.text((140, 500), "areeba-khan.vercel.app", font=load(reg, 32), fill="#a3949f")

img.save("src/app/opengraph-image.png", optimize=True)
print("saved")
