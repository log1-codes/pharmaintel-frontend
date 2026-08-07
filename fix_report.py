import re

with open('src/pages/NewCeacam5Report.tsx', 'r') as f:
    content = f.read()

# 1. Remove automatic loadInlinePdf from toggleChapter
content = content.replace('''        if (isOpening && chapterNumber && isUnlocked(chapterNumber)) {
            loadInlinePdf(chapterNumber);
        }''', '')

# 2. Update the chapter-body rendering for each chapter (1 through 8)
# We want to replace `{isUnlocked(N) ? ( ... ) : ( <preview/paywall> )}`
# with `{pdfUrls[N] ? ( <iframe ... /> ) : ( <preview/paywall> )}`
# Since the paywall already has `{isUnlocked(N) ? ... : ...}` we just need to change the outer condition.
for i in range(1, 9):
    pattern = rf'{{isUnlocked\({i}\) \? \(\s*<div style={{{{ padding: \'20px\' }}}}>\s*{{loadingPdf\[{i}\] \? \(\s*<div[^>]*>Loading secure PDF\.\.\.</div>\s*\) : pdfUrls\[{i}\] \? \(\s*<iframe[^>]*/>\s*\) : \(\s*<div[^>]*>Failed to load PDF\.\s*<button[^>]*>Retry</button></div>\s*\)\}}\s*</div>\s*\) : \('
    
    replacement = rf'''{{pdfUrls[{i}] || loadingPdf[{i}] ? (
                                <div style={{{{ padding: '20px' }}}}>
                                    {{loadingPdf[{i}] ? (
                                        <div style={{{{ textAlign: 'center', padding: '40px 0', color: 'var(--mist)', fontStyle: 'italic' }}}}>Loading secure PDF...</div>
                                    ) : pdfUrls[{i}] ? (
                                        <iframe src={{pdfUrls[{i}]}} style={{{{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', backgroundColor: 'white' }}}} title="Chapter {i} PDF" />
                                    ) : (
                                        <div style={{{{ textAlign: 'center', padding: '40px 0', color: 'var(--lock-red)' }}}}>Failed to load PDF. <button onClick={{() => loadInlinePdf({i})}} style={{{{ textDecoration: 'underline', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}}}>Retry</button></div>
                                    )}}
                                </div>
                            ) : ('''
    
    content = re.sub(pattern, replacement, content)

    # 3. Change btn-unlock action for unlocked chapters to loadInlinePdf(i) instead of handleViewPdf(i)
    # wait, handleViewPdf might do something different? Let's check what handleViewPdf does.
    # actually handleViewPdf is not defined in the snippet I saw? Wait, yes it is:
    # <button className="btn-unlock" onClick={() => handleViewPdf(1)}>Read Chapter</button>
    
with open('src/pages/NewCeacam5Report.tsx', 'w') as f:
    f.write(content)

