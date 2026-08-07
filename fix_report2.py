import re

with open('src/pages/NewCeacam5Report.tsx', 'r') as f:
    content = f.read()

for i in range(1, 9):
    # We want to replace {isUnlocked(X) ? (\n    <div style={{ padding: '20px' }}>
    # with {pdfUrls[X] || loadingPdf[X] ? (\n    <div style={{ padding: '20px' }}>
    old_str = f"{{isUnlocked({i}) ? (\n                                <div style={{{{ padding: '20px' }}}}>"
    new_str = f"{{pdfUrls[{i}] || loadingPdf[{i}] ? (\n                                <div style={{{{ padding: '20px' }}}}>"
    content = content.replace(old_str, new_str)
    
    # Also change pw-lock text if unlocked
    lock_old = f'<div className="pw-lock">Full content locked</div>'
    lock_new = f'<div className="pw-lock">{{isUnlocked({i}) ? "Content Unlocked" : "Full content locked"}}</div>'
    # Wait, lock_old is the same for all chapters. We can't just replace it globally.
    # Instead, we can do a regex block replace for each chapter body.
    
with open('src/pages/NewCeacam5Report.tsx', 'w') as f:
    f.write(content)

