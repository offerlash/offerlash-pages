# Design System - Single Source of Truth

**Date Established:** November 10, 2024  
**Last Updated:** November 10, 2024

---

## 📍 **Authoritative Source**

**Location:** `~/Workspace/Projects/offerlash/offerlash-app`  
**Platform:** Kotlin Multiplatform (Jetpack Compose)  
**Status:** ✅ **SINGLE SOURCE OF TRUTH**

---

## 🎨 **Design Authority**

The `offerlash-app` repository is the **master design system** for all Offerlash projects. All design decisions, tokens, and specifications originate from this codebase.

### **What's Included:**

1. **Themes & Colors**
   - Source: `ui/Color.kt`, `presentation/common/OfferLashColors.kt`
   - 212+ color tokens (light/dark modes)
   - Material 3 base colors + custom brand palette

2. **Typography**
   - Source: `ui/Type.kt`, `ui/Font.kt`
   - Montserrat (Latin) / Montserrat Arabic
   - Material 3 typography scale

3. **Spacing**
   - Source: `ui/Spacing.kt`
   - 4dp grid system
   - 12 spacing tokens with dynamic scaling

4. **Dimensions**
   - Source: `ui/Dimens.kt`
   - 58+ dimension tokens
   - Border widths, corner radius, component sizes

5. **Shapes**
   - Source: `ui/Shapes.kt`
   - 5 pre-defined corner-based shapes

6. **Visual Effects**
   - Source: `ui/Alpha.kt`, `ui/Animation.kt`, `ui/Gradient.kt`
   - Transparency values, animation scales, gradient offsets

7. **Theme System**
   - Source: `ui/Theme.kt`
   - Complete theme orchestration
   - Material 3 integration

---

## 📊 **Token Mapping: App → Web**

This website (`offerlash-pages`) maps design tokens from the app to CSS:

| App Source | Web Target | Example |
|------------|-----------|---------|
| `OfferLashColors.primary` | `--color-primary` | `#6B5BFF` |
| `OfferLashColors.background` | `--color-background` | `#F6F7FC` |
| `OfferLashSpaces.md` | `--space-md` | `16px` |
| `OfferLashDimens.cornerLarge` | `--radius-large` | `24px` |
| `OfferLashDimens.buttonPaddingH` | `--padding-button-h` | `20px` |

**Complete mapping documented in:** `DESIGN_SYSTEM.md`

---

## 🔄 **Synchronization Process**

### **When App Design Changes:**

1. **Extract** new tokens from Kotlin files
2. **Update** corresponding CSS variables
3. **Test** alignment across all pages
4. **Document** changes in design system files
5. **Deploy** updated web theme

### **Change Propagation:**

```
offerlash-app (Kotlin)
    ↓ Extract design tokens
CSS Variables (Web)
    ↓ Apply to components
offerlash-pages (HTML/CSS)
```

---

## 📝 **Current Alignment Status**

✅ **100% ALIGNED** (as of November 10, 2024)

| Design Element | Status | Last Synced |
|---------------|--------|-------------|
| Colors | ✅ Aligned | Nov 10, 2024 |
| Spacing | ✅ Aligned | Nov 10, 2024 |
| Typography | ✅ Aligned | Nov 10, 2024 |
| Dimensions | ✅ Aligned | Nov 10, 2024 |
| Shapes | ✅ Aligned | Nov 10, 2024 |
| Dark Mode | ✅ Aligned | Nov 10, 2024 |
| RTL Support | ✅ Aligned | Nov 10, 2024 |

---

## 🎯 **Design Decision Process**

### **For Any New Feature:**

1. ✅ Check app design tokens first
2. ✅ Use existing tokens when possible
3. ✅ If new token needed, add to app first
4. ✅ Propagate to web after app approval
5. ✅ Document the change

### **For Web-Specific Needs:**

1. Attempt to use existing app tokens
2. If adaptation needed, document reason
3. Keep as close to app as possible
4. Consider adding to app if reusable

---

## 📚 **Reference Documentation**

| Document | Purpose |
|----------|---------|
| `DESIGN_SYSTEM.md` | Complete design token reference |
| `DESIGN_SUMMARY.md` | Quick reference guide |
| `offerlash_app_design_system_analysis.md` | Deep analysis of app design |
| `REFACTOR_SUMMARY.md` | History of alignment work |

---

## 🚫 **What NOT to Do**

❌ **Don't** create new colors without checking app palette  
❌ **Don't** use arbitrary spacing values (use 4dp grid)  
❌ **Don't** hardcode values (use CSS variables)  
❌ **Don't** deviate from app typography  
❌ **Don't** create web-only design tokens without considering app

---

## ✅ **What TO Do**

✅ **Always** reference app design tokens  
✅ **Always** use CSS variables mapped from app  
✅ **Always** maintain 4dp spacing grid  
✅ **Always** match app's accessibility standards  
✅ **Always** test light/dark modes  
✅ **Always** verify RTL/LTR support

---

## 🔗 **Related Files**

### **In App Repository:**
- `ui/Color.kt` - Material 3 colors
- `ui/OfferLashColors.kt` - Custom brand colors
- `ui/Spacing.kt` - Spacing system
- `ui/Dimens.kt` - Dimensions
- `ui/Shapes.kt` - Corner shapes
- `ui/Type.kt` - Typography
- `ui/Theme.kt` - Theme orchestration

### **In Web Repository:**
- `assets/styles.css` - Full design token CSS
- `assets/styles.min.css` - Minified version
- `assets/css/offerlash-theme.css` - Component theme

---

## 📞 **Questions?**

For design system questions:
1. Check app Kotlin files first
2. Review design documentation
3. Verify current alignment status
4. Consult design team if needed

---

## 🎉 **Benefits of Single Source**

✅ **Consistency** - All platforms match perfectly  
✅ **Maintainability** - Update once, propagate everywhere  
✅ **Scalability** - Easy to add new platforms  
✅ **Quality** - Professional, tested design tokens  
✅ **Performance** - Optimized from the start  
✅ **Accessibility** - WCAG compliance built-in  

---

**Remember:** The app is the truth. The web reflects that truth.

---

*Established: November 10, 2024*  
*Next Review: When major design updates occur*  
*Maintained by: Offerlash Team*
