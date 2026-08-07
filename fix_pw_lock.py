import re

with open('src/pages/NewCeacam5Report.tsx', 'r') as f:
    content = f.read()

for i in range(1, 9):
    # Change "Full content locked" to dynamic
    # The structure has exactly: <div className="pw-lock">Full content locked</div>
    # But wait, there are 8 occurrences, one for each chapter.
    # We can just replace the block for each chapter.
    
    # We need to find the specific block for chapter `i`.
    # Let's just find the `pw-left` inside the chapter i.
    # Actually, a regex matching the block is safer:
    pattern = rf'(\{{pdfUrls\[{i}\] \|\| loadingPdf\[{i}\] \?.*?<div className="pw-lock">)Full content locked(</div>)'
    replacement = rf'\1{{isUnlocked({i}) ? "Content Unlocked" : "Full content locked"}}\2'
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
with open('src/pages/NewCeacam5Report.tsx', 'w') as f:
    f.write(content)

